<script setup lang="ts">
import { ref, computed } from 'vue'
import { PROJECTS_DATA } from '../../constants'

const filter = ref<'all' | 'mobile' | 'backend' | 'fullstack'>('all')

const filteredProjects = computed(() => {
  if (filter.value === 'all') return PROJECTS_DATA
  return PROJECTS_DATA.filter(project => project.category === filter.value)
})

const featuredProjects = computed(() => {
  return PROJECTS_DATA.filter(project => project.featured).slice(0, 3)
})

const filterOptions = [
  { value: 'all', label: 'All Projects' },
  { value: 'mobile', label: 'Mobile Apps' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' }
]

// Add method to open links in new tab
const openInNewTab = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
          Featured Projects
        </h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A selection of my recent work spanning mobile applications, backend systems, and full-stack solutions.
          Each project represents a unique challenge and learning experience.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
        <button
          v-for="option in filterOptions"
          :key="option.value"
          @click="filter = option.value as any"
          class="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base"
          :class="filter === option.value
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          "
        >
          <span>{{ option.label }}</span>
          <span v-if="option.value !== 'all'" class="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
            {{ PROJECTS_DATA.filter(p => p.category === option.value).length }}
          </span>
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
        >
          <div class="pb-4">
            <div class="relative mb-4">
              <!-- Project image placeholder with gradient -->
              <div class="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl w-full h-48 sm:h-56 flex items-center justify-center">
                <div class="bg-slate-300 dark:bg-slate-600 border-2 border-dashed border-slate-400 dark:border-slate-500 rounded-xl w-16 h-16 flex items-center justify-center">
                  <svg class="w-8 h-8 text-slate-500 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
              </div>
              <div
                v-if="project.featured"
                class="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                :style="{ animationDelay: `${0.3 + index * 0.05}s` }"
              >
                Featured
              </div>
            </div>
            <div class="px-6">
              <h3 class="text-lg sm:text-xl mb-2 font-bold text-slate-900 dark:text-white">{{ project.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>

          <div class="px-6 flex-1">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 4" class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-md text-xs font-medium">
                +{{ project.technologies.length - 4 }}
              </span>
            </div>

            <div class="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4">
              <div class="flex items-center justify-between">
                <span class="capitalize">{{ project.category }}</span>
                <span>Updated recently</span>
              </div>
            </div>
          </div>

          <div class="px-6 pb-6">
            <div class="flex items-center justify-between">
              <div class="flex space-x-2">
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                  aria-label="View live demo"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              <button
                @click="openInNewTab(project.githubUrl)"
                class="px-4 py-2 text-sm font-medium rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Show All Projects CTA -->
      <div v-if="filter === 'all' && PROJECTS_DATA.length > 6" class="text-center mt-12 sm:mt-16">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            @click="openInNewTab('https://github.com/mo7amed4522')"
            class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 px-6 py-3 text-lg bg-slate-600 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-400"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            View All Projects on GitHub
          </button>
          <button
            @click="openInNewTab('https://gitlab.com/mo7amed24')"
            class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 px-6 py-3 text-lg bg-slate-600 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-slate-400"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            View All Projects on GitLab
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>