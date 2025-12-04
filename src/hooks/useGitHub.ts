'use client';

import { useState, useEffect } from 'react';
import { GitHubRepo, GitHubUser, Project, APIResponse } from '../lib/types';

interface GitHubData {
  user: GitHubUser | null;
  repositories: GitHubRepo[];
  projects: Project[];
  loading: boolean;
  error: string | null;
  lastUpdated: string | null;
}

export function useGitHub(username: string = 'mo7amed4522'): GitHubData {
  const [data, setData] = useState<GitHubData>({
    user: null,
    repositories: [],
    projects: [],
    loading: true,
    error: null,
    lastUpdated: null
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true, error: null }));

        const response = await fetch(`/api/github?user=${username}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: APIResponse<{ user: GitHubUser; repositories: GitHubRepo[]; lastUpdated: string }> = await response.json();

        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch GitHub data');
        }

        const { user, repositories, lastUpdated } = result.data!;

        // Transform repositories into projects
        const projects = transformRepos(repositories);

        setData({
          user,
          repositories,
          projects,
          loading: false,
          error: null,
          lastUpdated
        });
      } catch (error) {
        console.error('GitHub fetch error:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch GitHub data'
        }));
      }
    };

    fetchGitHubData();
  }, [username]);

  return data;
}

// Helper function to transform repositories to projects
function transformRepos(repos: GitHubRepo[]): Project[] {
  const projectCategories: Record<string, 'mobile' | 'backend' | 'fullstack'> = {
    'Life-Line': 'mobile',
    'My-Eye': 'mobile',
    'Food-GO-User': 'mobile',
    'HOTELO-ERP': 'backend',
    'My-Dress-ERP': 'backend',
    'portfolio': 'fullstack'
  };

  const projectDescriptions: Record<string, string> = {
    'Life-Line': 'Hospital Management & Emergency Response App built with Flutter for efficient healthcare service delivery.',
    'My-Eye': 'Voice-Controlled Accessible Travel Booking App designed for visually impaired users using Flutter.',
    'Food-GO-User': 'Home-Cooked Meals Marketplace mobile application for connecting home chefs with customers.',
    'HOTELO-ERP': 'Comprehensive Hotel Management Backend System with TypeScript and MySQL.',
    'My-Dress-ERP': 'E-commerce Dress Store Backend with inventory management and order processing.',
    'portfolio': 'Professional portfolio website built with Next.js 14 and modern web technologies.'
  };

  return repos.map(repo => ({
    id: repo.id.toString(),
    title: repo.name.replace(/-/g, ' '),
    description: projectDescriptions[repo.name] || repo.description || `A ${repo.language} project focused on modern development practices.`,
    technologies: [
      ...(repo.language ? [repo.language] : []),
      ...repo.topics.slice(0, 3)
    ],
    githubUrl: repo.html_url,
    liveUrl: repo.topics.includes('demo') ? `https://${repo.name.toLowerCase()}.vercel.app` : undefined,
    featured: repo.stargazers_count > 5 || repo.topics.includes('featured'),
    category: projectCategories[repo.name] ||
      (repo.language === 'Dart' || repo.topics.includes('flutter') ? 'mobile' :
       repo.topics.includes('frontend') || repo.topics.includes('nextjs') ? 'fullstack' : 'backend'),
    imageUrl: `https://opengraph.githubassets.com/1/mo7amed4522/${repo.name}`
  }));
}