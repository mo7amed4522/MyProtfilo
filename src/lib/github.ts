import { GitHubRepo, GitHubUser, Project } from './types';

export function transformGitHubRepos(repos: GitHubRepo[]): Project[] {
  const projectCategories: Record<string, 'mobile' | 'backend' | 'fullstack'> = {
    // Mobile projects
    'Life-Line': 'mobile',
    'My-Eye': 'mobile',
    'Food-GO-User': 'mobile',

    // Backend projects
    'HOTELO-ERP': 'backend',
    'My-Dress-ERP': 'backend',

    // Fullstack projects
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
    imageUrl: `https://opengraph.githubassets.com/1/${repo.owner?.login || 'mo7amed4522'}/${repo.name}`
  }));
}

export function formatGitHubDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    'Go': '#00ADD8',
    'TypeScript': '#3178c6',
    'JavaScript': '#f1e05a',
    'Python': '#3572A5',
    'Dart': '#00B4AB',
    'Java': '#b07219',
    'PHP': '#4F5D95',
    'C++': '#f34b7d',
    'Ruby': '#701516',
    'Swift': '#ffac45',
    'Kotlin': '#A97BFF',
    'Rust': '#dea584',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Shell': '#89e051',
    'Dockerfile': '#384d54'
  };

  return colors[language || ''] || '#858585';
}

export function extractTechStack(repos: GitHubRepo[]): string[] {
  const techSet = new Set<string>();

  repos.forEach(repo => {
    if (repo.language) {
      techSet.add(repo.language);
    }
    repo.topics.forEach(topic => {
      if (topic.length < 20 && !topic.includes('project')) {
        techSet.add(topic);
      }
    });
  });

  return Array.from(techSet).sort();
}