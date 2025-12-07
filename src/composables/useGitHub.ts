import { ref, onMounted } from "vue";
import { PROJECTS_DATA } from "../constants";

// Mock GitHub repository data
const mockGitHubRepos = [
  {
    id: 1,
    name: "Life-Line",
    description:
      "Hospital Management & Emergency Response App - A comprehensive Flutter application for hospital management and emergency medical response coordination.",
    html_url: "https://github.com/mo7amed4522/Life-Line",
    stargazers_count: 42,
    forks_count: 12,
    language: "Dart",
    updated_at: "2023-10-15T10:30:00Z",
    topics: ["flutter", "firebase", "healthcare"],
    fork: false,
  },
  {
    id: 2,
    name: "My-Eye",
    description:
      "Voice-Controlled Accessible Travel Booking App - An innovative Flutter app designed for visually impaired users, featuring voice navigation and accessibility.",
    html_url: "https://github.com/mo7amed4522/My-Eye",
    stargazers_count: 38,
    forks_count: 8,
    language: "Dart",
    updated_at: "2023-09-22T14:15:00Z",
    topics: ["flutter", "accessibility", "voice-control"],
    fork: false,
  },
  {
    id: 3,
    name: "HOTELO-ERP",
    description:
      "Hotel Management Backend System - Comprehensive hotel management solution with booking, inventory, and staff management capabilities.",
    html_url: "https://github.com/mo7amed4522/HOTELO-ERP",
    stargazers_count: 27,
    forks_count: 5,
    language: "TypeScript",
    updated_at: "2023-08-30T09:45:00Z",
    topics: ["nodejs", "express", "mysql", "erp"],
    fork: false,
  },
  {
    id: 4,
    name: "Food-GO-User",
    description:
      "Home-Cooked Meals Marketplace (User App) - Mobile application connecting home chefs with customers for ordering homemade meals.",
    html_url: "https://github.com/mo7amed4522/Food-GO-User",
    stargazers_count: 19,
    forks_count: 3,
    language: "Dart",
    updated_at: "2023-07-18T16:20:00Z",
    topics: ["flutter", "firebase", "food-delivery"],
    fork: false,
  },
  {
    id: 5,
    name: "My-Dress-ERP",
    description:
      "E-commerce Dress Store Backend - Backend system for dress e-commerce platform with inventory and order management.",
    html_url: "https://github.com/mo7amed4522/My-Dress-ERP",
    stargazers_count: 15,
    forks_count: 2,
    language: "PHP",
    updated_at: "2023-06-25T11:30:00Z",
    topics: ["laravel", "mysql", "ecommerce"],
    fork: false,
  },
];

export function useGitHub() {
  const projects = ref(PROJECTS_DATA);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchGitHubData = async () => {
    loading.value = true;
    error.value = null;

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // In a real implementation, you would fetch from GitHub API:
      // const response = await fetch(`https://api.github.com/users/mo7amed4522/repos?sort=updated&per_page=10`)
      // const data = await response.json()

      // For now, we'll use mock data
      const data = mockGitHubRepos;

      // Update projects with GitHub data
      projects.value = projects.value.map((project) => {
        const repo = data.find((repo) => repo.html_url === project.githubUrl);
        if (repo) {
          return {
            ...project,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            updated_at: repo.updated_at,
          };
        }
        return project;
      });
    } catch (err) {
      error.value = "Failed to load GitHub projects";
      console.error("GitHub API error:", err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchGitHubData();
  });

  return {
    projects: projects.value,
    loading: loading.value,
    error: error.value,
    refresh: fetchGitHubData,
  };
}
