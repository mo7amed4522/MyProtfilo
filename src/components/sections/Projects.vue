<template>
  <section
    id="projects"
    class="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 py-8 sm:py-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="relative inline-block">
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 relative z-10"
          >
            {{ t("project.title") }}
          </h1>
          <div
            class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          ></div>
        </div>
        <p
          class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-8"
        >
          {{ t("project.description") }}
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("project.totalProjects") }}
              </p>
              <p class="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {{ totalProjects }}
              </p>
            </div>
            <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <svg
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("project.fullStack") }}
              </p>
              <p class="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {{ projectCounts.fullstack }}
              </p>
            </div>
            <div class="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <svg
                class="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("project.mobileApps") }}
              </p>
              <p class="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {{ projectCounts.mobile }}
              </p>
            </div>
            <div class="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <svg
                class="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("project.backendSystems") }}
              </p>
              <p class="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {{ projectCounts.backend }}
              </p>
            </div>
            <div class="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <svg
                class="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="mb-10">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            {{ t("project.browseProjects") }}
          </h2>
          <div class="filter-tabs flex space-x-2 overflow-x-auto pb-2">
            <button
              v-for="option in filterOptions"
              :key="option.value"
              :class="[
                'flex items-center whitespace-nowrap px-4 py-2 rounded-full font-medium transition-all duration-300',
                filter === option.value
                  ? getActiveFilterClass(option.value)
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700',
              ]"
              @click="filter = option.value"
            >
              <span class="flex items-center">
                <span>{{ option.label }}</span>
                <span
                  v-if="option.value !== 'all'"
                  class="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs"
                >
                  {{
                    projectCounts[option.value as keyof typeof projectCounts] ||
                    0
                  }}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Project Header with Image/Gradient -->
          <div class="relative h-48 overflow-hidden">
            <div
              :class="getProjectGradient(project.category)"
              class="h-full w-full flex items-center justify-center"
            >
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="relative z-10 p-8 text-center">
                <div
                  class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      v-if="project.category === 'mobile'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                    <path
                      v-else-if="project.category === 'backend'"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    ></path>
                    <path
                      v-else
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                </div>
                <div v-if="project.featured" class="absolute top-4 right-4">
                  <span
                    class="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg"
                    >{{ t("project.featured") }}</span
                  >
                </div>
                <span
                  class="text-white font-bold text-sm uppercase tracking-wider"
                >
                  {{ getCategoryLabel(project.category) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <h3
                class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ project.title }}
              </h3>
              <span
                class="text-xs font-medium px-2 py-1 rounded-full"
                :class="getStatusClass(project.status)"
              >
                {{ project.status }}
              </span>
            </div>

            <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="mb-6">
              <p
                class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3"
              >
                {{ t("project.technologiesUsed") }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies.slice(0, 5)"
                  :key="tech"
                  class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="project.technologies.length > 5"
                  class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-medium"
                >
                  +{{ project.technologies.length - 5 }}
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl"
            >
              <div class="text-center">
                <p
                  class="text-2xl font-bold"
                  :class="getStatColor(project.complexity)"
                >
                  {{ project.complexity }}%
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {{ t("project.complexity") }}
                </p>
              </div>
              <div class="text-center">
                <p
                  class="text-2xl font-bold text-green-600 dark:text-green-400"
                >
                  {{ project.completion }}%
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {{ t("project.completion") }}
                </p>
              </div>
              <div class="text-center">
                <p
                  class="text-2xl font-bold text-purple-600 dark:text-purple-400"
                >
                  {{ project.impact }}
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {{ t("project.impactScore") }}
                </p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div
              class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
            >
              <div class="flex space-x-2">
                <button
                  v-if="project.liveUrl"
                  class="p-2 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300 rounded-lg"
                  title="Live Demo"
                  @click="openInNewTab(project.liveUrl)"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </button>
                <button
                  v-if="project.githubUrl"
                  class="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 rounded-lg"
                  title="Source Code"
                  @click="openInNewTab(project.githubUrl)"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </button>
              </div>
              <button
                class="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-md"
                @click="openProjectDetails(project)"
              >
                <span class="flex items-center">
                  {{ t("project.viewDetails") }}
                  <svg
                    class="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects -->
      <div class="mt-16 text-center">
        <div
          class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 sm:p-12"
        >
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Want to see more?
          </h3>
          <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            {{ t("project.exploreAllProjects") }}
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              class="inline-flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              @click="openInNewTab('https://github.com/mo7amed4522')"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              {{ t("project.viewGitHubPortfolio") }}
            </button>
            <button
              class="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              @click="openInNewTab('https://gitlab.com/mo7amed24')"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                />
              </svg>
              {{ t("project.viewGitLabPortfolio") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

// Define types
interface Project {
  id: number;
  title: string;
  description: string;
  category: "mobile" | "backend" | "fullstack";
  technologies: string[];
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "archived";
  complexity: number;
  completion: number;
  impact: string;
}
const { t } = useI18n();
// State
const filter = ref<"all" | "mobile" | "backend" | "fullstack">("all");

// Sample projects data - replace with your actual data
const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: t("project.eye"),
    description: t("project.eyeDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    featured: true,
    githubUrl: "https://github.com/mo7amed4522/Eye",
    status: "in-progress",
    complexity: 60,
    completion: 70,
    impact: "Medium",
  },
  {
    id: 2,
    title: t("project.templateiOS"),
    description: t("project.templateiOSDescription"),
    category: "mobile",
    technologies: ["Swift", "iOS"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/Templete_ios",

    status: "completed",
    complexity: 50,
    completion: 100,
    impact: "Low",
  },
  {
    id: 3,
    title: t("project.realState"),
    description: t("project.realStateDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    featured: true,
    githubUrl: "https://github.com/mo7amed4522/real_state",

    status: "in-progress",
    complexity: 75,
    completion: 80,
    impact: "High",
  },
  {
    id: 4,
    title: t("project.driverApp"),
    description: t("project.driverAppDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/Driver-App",

    status: "completed",
    complexity: 70,
    completion: 100,
    impact: "Medium",
  },
  {
    id: 5,
    title: t("project.ridyApp"),
    description: t("project.ridyAppDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/Ridy-App",
    status: "in-progress",
    complexity: 65,
    completion: 60,
    impact: "Medium",
  },
  {
    id: 6,
    title: t("project.taxiBackend"),
    description: t("project.taxiBackendDescription"),
    category: "backend",
    technologies: ["TypeScript", "Node.js"],
    featured: true,
    githubUrl: "https://github.com/mo7amed4522/taxi_backend",
    status: "in-progress",
    complexity: 80,
    completion: 65,
    impact: "High",
  },
  {
    id: 7,
    title: t("project.userApp"),
    description: t("project.userAppDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart", "REST API"],
    featured: true,
    githubUrl: "https://github.com/mo7amed4522/User-App",
    status: "in-progress",
    complexity: 70,
    completion: 75,
    impact: "High",
  },
  {
    id: 8,
    title: t("project.backendChat"),
    description: t("project.backendChatDescription"),
    category: "backend",
    technologies: ["TypeScript", "Node.js"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/backend_chat",

    status: "in-progress",
    complexity: 70,
    completion: 60,
    impact: "Medium",
  },
  {
    id: 9,
    title: t("project.healthLife"),
    description: t("project.healthLifeDescription"),
    category: "mobile",
    technologies: ["Flutter", "Dart"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/health_life",

    status: "in-progress",
    complexity: 55,
    completion: 60,
    impact: "Medium",
  },
  {
    id: 10,
    title: t("project.odooDocker"),
    description: t("project.odooDockerDescription"),
    category: "fullstack",
    technologies: ["Python", "Docker", "Odoo"],
    featured: false,
    githubUrl: "https://github.com/mo7amed4522/odoo-docker",
    status: "completed",
    complexity: 65,
    completion: 100,
    impact: "Medium",
  },
];

// Computed properties
const filteredProjects = computed(() => {
  if (filter.value === "all") return PROJECTS_DATA;
  return PROJECTS_DATA.filter((project) => project.category === filter.value);
});

const totalProjects = computed(() => PROJECTS_DATA.length);

const projectCounts = computed(() => ({
  all: PROJECTS_DATA.length,
  mobile: PROJECTS_DATA.filter((p) => p.category === "mobile").length,
  backend: PROJECTS_DATA.filter((p) => p.category === "backend").length,
  fullstack: PROJECTS_DATA.filter((p) => p.category === "fullstack").length,
}));

const filterOptions = [
  { value: "all", label: t("project.allProjects") },
  { value: "mobile", label: t("project.mobileApps") },
  { value: "backend", label: t("project.backendSystems") },
  { value: "fullstack", label: t("project.fullStack") },
];

// Helper functions
const openInNewTab = (url: string) => {
  window.open(url, "_blank");
};

const openProjectDetails = (project: Project) => {
  // You can implement a modal or navigation here
  console.log(t("project.openingProjectDetails"), project.title);
  // For now, just open GitHub
  openInNewTab(project.githubUrl);
};

const getActiveFilterClass = (value: string) => {
  const classes = {
    all: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg",
    mobile: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg",
    backend:
      "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg",
    fullstack:
      "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg",
  };
  return classes[value as keyof typeof classes] || classes.all;
};

const getProjectGradient = (category: string) => {
  const gradients = {
    mobile: "bg-gradient-to-br from-green-400 to-green-600",
    backend: "bg-gradient-to-br from-orange-400 to-orange-600",
    fullstack: "bg-gradient-to-br from-purple-400 to-purple-600",
  };
  return (
    gradients[category as keyof typeof gradients] ||
    "bg-gradient-to-br from-blue-400 to-blue-600"
  );
};

const getCategoryLabel = (category: string) => {
  const labels = {
    mobile: "Mobile Application",
    backend: "Backend System",
    fullstack: "Full Stack Project",
  };
  return labels[category as keyof typeof labels] || "Project";
};

const getStatusClass = (status: string) => {
  const classes = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    archived:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
  };
  return classes[status as keyof typeof classes] || classes.completed;
};

const getStatColor = (value: number) => {
  if (value >= 80) return "text-red-600 dark:text-red-400";
  if (value >= 60) return "text-orange-600 dark:text-orange-400";
  return "text-yellow-600 dark:text-yellow-400";
};
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Smooth hover effects */
.hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Custom scrollbar for filter tabs */
.filter-tabs::-webkit-scrollbar {
  height: 4px;
}

.filter-tabs::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

.filter-tabs::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.filter-tabs::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .filter-tabs::-webkit-scrollbar-track {
    background: #374151;
  }

  .filter-tabs::-webkit-scrollbar-thumb {
    background: #6b7280;
  }

  .filter-tabs::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
}

/* Card hover effect */
.group:hover .group-hover\:text-blue-600 {
  color: #2563eb;
}

.dark .group:hover .group-hover\:text-blue-400 {
  color: #60a5fa;
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #10b981);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
