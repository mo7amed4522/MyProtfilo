<script setup lang="ts">
import { ref } from 'vue'
import { SKILLS_DATA } from '../../constants'

// Change from single expanded category to array to track multiple expanded categories
const expandedCategories = ref<number[]>([0, 1, 2, 3, 4])

const getGradientColors = (color: string): string => {
  const gradients: Record<string, string> = {
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600',
    purple: 'from-purple-400 to-purple-600',
    orange: 'from-orange-400 to-orange-600',
    red: 'from-red-400 to-red-600',
  }
  return gradients[color] || gradients.blue
}

const getIconColors = (color: string): string => {
  const iconColors: Record<string, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    purple: 'text-purple-600 dark:text-purple-400',
    orange: 'text-orange-600 dark:text-orange-400',
    red: 'text-red-600 dark:text-red-400',
  }
  return iconColors[color] || iconColors.blue
}

// Updated toggle function to handle multiple categories
const toggleCategory = (index: number) => {
  const currentIndex = expandedCategories.value.indexOf(index)
  if (currentIndex === -1) {
    // Add to expanded categories
    expandedCategories.value = [...expandedCategories.value, index]
  } else {
    // Remove from expanded categories (but keep at least one open)
    if (expandedCategories.value.length > 1) {
      expandedCategories.value = expandedCategories.value.filter(i => i !== index)
    }
  }
}

// Check if a category is expanded
const isCategoryExpanded = (index: number) => {
  return expandedCategories.value.includes(index)
}
</script>

<template>
  <section id="skills" class="py-16 sm:py-20 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
          Technical Skills
        </h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical expertise across various domains of software development.
        </p>
      </div>

      <!-- Skills Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(category, index) in SKILLS_DATA"
          :key="category.title"
          class="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div class="p-6">
            <div class="flex items-center justify-between cursor-pointer"
                 @click="toggleCategory(index)">
              <div class="flex items-center space-x-3">
                <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-700" :class="getIconColors(category.color)">
                  <svg v-if="category.icon === 'Code'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  <svg v-else-if="category.icon === 'Database'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  </svg>
                  <svg v-else-if="category.icon === 'Server'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                  <svg v-else-if="category.icon === 'Smartphone'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <svg v-else-if="category.icon === 'Cloud'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ category.title }}</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400">
                    {{ category.description }}
                  </p>
                </div>
              </div>
              <svg
                class="w-5 h-5 text-slate-400 transition-transform duration-200"
                :class="{ 'rotate-180': isCategoryExpanded(index) }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            <div v-if="isCategoryExpanded(index)" class="mt-6 space-y-4">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="space-y-2"
              >
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {{ skill.name }}
                  </span>
                  <div class="flex items-center space-x-2">
                    <span v-if="skill.years" class="text-xs text-slate-500 dark:text-slate-400">
                      {{ skill.years }}y
                    </span>
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      {{ skill.proficiency }}%
                    </span>
                  </div>
                </div>
                <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    class="h-full rounded-full"
                    :class="`bg-gradient-to-r ${getGradientColors(category.color)}`"
                    :style="{ width: `${skill.proficiency}%` }"
                  />
                </div>
              </div>
            </div>

            <div v-else class="mt-4 flex flex-wrap gap-1">
              <span
                v-for="skill in category.skills.slice(0, 4)"
                :key="skill.name"
                class="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              >
                {{ skill.name }}
              </span>
              <span v-if="category.skills.length > 4" class="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-500">
                +{{ category.skills.length - 4 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>