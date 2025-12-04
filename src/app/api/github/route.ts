import { NextRequest, NextResponse } from 'next/server';
import { GitHubRepo, GitHubUser } from '@/lib/types';

// Cache data for 5 minutes to avoid rate limits
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('user') || 'mo7amed4522';

    // Check cache
    const cacheKey = `github-${username}`;
    const cached = cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        data: cached.data,
        cached: true
      });
    }

    // GitHub API configuration
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App/1.0'
    };

    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    // Fetch user data and repositories in parallel
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`, { headers })
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error(`GitHub API error: ${userResponse.status} ${reposResponse.status}`);
    }

    const userData: GitHubUser = await userResponse.json();
    const reposData: GitHubRepo[] = await reposResponse.json();

    // Filter and process repositories
    const filteredRepos = reposData
      .filter(repo => !repo.fork && repo.name !== 'mo7amed4522')
      .slice(0, 12) // Limit to 12 repositories
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at,
        topics: repo.topics,
        fork: repo.fork
      }));

    const response = {
      user: userData,
      repositories: filteredRepos,
      lastUpdated: new Date().toISOString()
    };

    // Cache the response
    cache.set(cacheKey, {
      data: response,
      timestamp: Date.now()
    });

    return NextResponse.json({
      success: true,
      data: response,
      cached: false
    });

  } catch (error) {
    console.error('GitHub API Error:', error);

    // Return cached data if available, even if expired
    const username = new URL(request.url).searchParams.get('user') || 'mo7amed4522';
    const cacheKey = `github-${username}`;
    const cached = cache.get(cacheKey);

    if (cached) {
      return NextResponse.json({
        success: true,
        data: cached.data,
        cached: true,
        warning: 'Using cached data due to API error'
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch GitHub data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Clear cache function for testing
export async function DELETE() {
  cache.clear();
  return NextResponse.json({
    success: true,
    message: 'GitHub API cache cleared'
  });
}