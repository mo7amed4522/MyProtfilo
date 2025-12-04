import { SkillCategoryData, Skill } from './types';

export const SKILLS_DATA: SkillCategoryData[] = [
  {
    title: 'Backend Development',
    description: 'Server-side technologies and APIs',
    color: 'blue',
    icon: 'Server',
    skills: [
      { name: 'Go', category: 'backend', proficiency: 90, years: 3 },
      { name: 'Node.js', category: 'backend', proficiency: 85, years: 4 },
      { name: 'Express.js', category: 'backend', proficiency: 85, years: 3 },
      { name: 'Gin Framework', category: 'backend', proficiency: 88, years: 2 },
      { name: 'gRPC', category: 'backend', proficiency: 80, years: 2 },
      { name: 'Protobuf', category: 'backend', proficiency: 80, years: 2 },
      { name: 'REST APIs', category: 'backend', proficiency: 95, years: 4 },
      { name: 'GraphQL', category: 'backend', proficiency: 75, years: 1 },
      { name: 'Microservices', category: 'backend', proficiency: 85, years: 2 },
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile app development',
    color: 'green',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter', category: 'mobile', proficiency: 90, years: 3 },
      { name: 'Dart', category: 'mobile', proficiency: 88, years: 3 },
      { name: 'Provider', category: 'mobile', proficiency: 85, years: 2 },
      { name: 'Bloc', category: 'mobile', proficiency: 82, years: 2 },
      { name: 'Riverpod', category: 'mobile', proficiency: 80, years: 1 },
      { name: 'React Native', category: 'mobile', proficiency: 70, years: 1 },
      { name: 'iOS Development', category: 'mobile', proficiency: 65, years: 1 },
      { name: 'Android Development', category: 'mobile', proficiency: 65, years: 1 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud platforms and deployment tools',
    color: 'purple',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', category: 'cloud', proficiency: 85, years: 2 },
      { name: 'Firebase', category: 'cloud', proficiency: 80, years: 3 },
      { name: 'Vercel', category: 'cloud', proficiency: 90, years: 3 },
      { name: 'Docker', category: 'cloud', proficiency: 82, years: 2 },
      { name: 'Kubernetes', category: 'cloud', proficiency: 75, years: 1 },
      { name: 'CI/CD', category: 'cloud', proficiency: 80, years: 2 },
      { name: 'GitHub Actions', category: 'cloud', proficiency: 85, years: 2 },
      { name: 'Terraform', category: 'cloud', proficiency: 70, years: 1 },
    ]
  },
  {
    title: 'Databases',
    description: 'Database technologies and data management',
    color: 'orange',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', category: 'database', proficiency: 85, years: 3 },
      { name: 'MySQL', category: 'database', proficiency: 80, years: 4 },
      { name: 'MongoDB', category: 'database', proficiency: 78, years: 2 },
      { name: 'Redis', category: 'database', proficiency: 82, years: 2 },
      { name: 'Elasticsearch', category: 'database', proficiency: 70, years: 1 },
      { name: 'SQL', category: 'database', proficiency: 90, years: 4 },
      { name: 'NoSQL', category: 'database', proficiency: 80, years: 2 },
    ]
  },
  {
    title: 'Languages & Tools',
    description: 'Programming languages and development tools',
    color: 'red',
    icon: 'Code',
    skills: [
      { name: 'TypeScript', category: 'language', proficiency: 90, years: 3 },
      { name: 'JavaScript', category: 'language', proficiency: 92, years: 5 },
      { name: 'PHP', category: 'language', proficiency: 75, years: 2 },
      { name: 'Python', category: 'language', proficiency: 70, years: 2 },
      { name: 'Git', category: 'language', proficiency: 88, years: 5 },
      { name: 'Linux', category: 'language', proficiency: 75, years: 2 },
      { name: 'Bash', category: 'language', proficiency: 70, years: 2 },
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    id: '1',
    company: 'Hera Sawda Technologies Co',
    position: 'Backend Developer',
    location: 'Dubai, UAE',
    startDate: '2022-03',
    endDate: undefined,
    description: [
      'Developing scalable backend services using Go monolith architecture with service-oriented design patterns',
      'Designing and implementing RESTful APIs and gRPC services for high-performance applications',
      'Working with PostgreSQL and Redis for efficient data management and caching',
      'Implementing microservices communication patterns and service orchestration',
      'Collaborating with cross-functional teams to deliver robust software solutions',
      'Participating in code reviews, architecture design, and technical decision-making'
    ],
    technologies: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Microservices']
  }
];

export const PROJECTS_DATA = [
  {
    id: '1',
    title: 'Life Line',
    description: 'Hospital Management & Emergency Response App - A comprehensive Flutter application for hospital management and emergency medical response coordination.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Firebase', 'REST APIs'],
    githubUrl: 'https://github.com/mo7amed4522/Life-Line',
    category: 'mobile' as const,
    featured: true
  },
  {
    id: '2',
    title: 'My Eye',
    description: 'Voice-Controlled Accessible Travel Booking App - An innovative Flutter app designed for visually impaired users, featuring voice navigation and accessibility.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Speech Recognition', 'REST APIs'],
    githubUrl: 'https://github.com/mo7amed4522/My-Eye',
    category: 'mobile' as const,
    featured: true
  },
  {
    id: '3',
    title: 'HOTELO ERP',
    description: 'Hotel Management Backend System - Comprehensive hotel management solution with booking, inventory, and staff management capabilities.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'REST APIs'],
    githubUrl: 'https://github.com/mo7amed4522/HOTELO-ERP',
    category: 'backend' as const,
    featured: true
  },
  {
    id: '4',
    title: 'Food GO',
    description: 'Home-Cooked Meals Marketplace (User App) - Mobile application connecting home chefs with customers for ordering homemade meals.',
    technologies: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Payment Integration'],
    githubUrl: 'https://github.com/mo7amed4522/Food-GO-User',
    category: 'mobile' as const,
    featured: false
  },
  {
    id: '5',
    title: 'My Dress ERP',
    description: 'E-commerce Dress Store Backend - Backend system for dress e-commerce platform with inventory and order management.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
    githubUrl: 'https://github.com/mo7amed4522/My-Dress-ERP',
    category: 'backend' as const,
    featured: false
  }
];

export const SOCIAL_LINKS = [
  { platform: 'GitHub', url: 'https://github.com/mo7amed4522', icon: 'Github', ariaLabel: 'GitHub Profile' },
  { platform: 'Email', url: 'mailto:khaled.mohamed@example.com', icon: 'Mail', ariaLabel: 'Send Email' },
  { platform: 'LinkedIn', url: '#', icon: 'Linkedin', ariaLabel: 'LinkedIn Profile' },
];

export const CONTACT_INFO = {
  name: 'Khaled Mohamed',
  title: 'Backend & Mobile Engineer',
  location: 'Dubai, UAE',
  email: 'khaled.mohamed@example.com',
  github: 'mo7amed4522',
};