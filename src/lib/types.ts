// Core type definitions for Khaled Mohamed's portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'mobile' | 'backend' | 'fullstack';
}

export interface Skill {
  name: string;
  category: 'backend' | 'mobile' | 'cloud' | 'database' | 'language';
  proficiency: number; // 1-100
  years?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined for current position
  description: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  resolvedTheme: 'light' | 'dark' | undefined;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  currentRole: string;
  githubUrl: string;
  linkedinUrl?: string;
  emailUrl: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image: string;
}

// API Response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData extends ContactForm {
  timestamp: string;
  userAgent?: string;
  ip?: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: any;
  visible: any;
  transition?: any;
}

// Skills categories for organization
export type SkillCategory = 'backend' | 'mobile' | 'cloud' | 'database' | 'language';

export interface SkillCategoryData {
  title: string;
  description: string;
  color: string;
  icon: string;
  skills: Skill[];
}

// Project filter options
export type ProjectFilter = 'all' | 'mobile' | 'backend' | 'fullstack';

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined;
}

// Timeline for experience section
export interface TimelineItem extends Experience {
  isCurrent: boolean;
  duration: string;
}