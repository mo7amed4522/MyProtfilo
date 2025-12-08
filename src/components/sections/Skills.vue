<template>
  <section
    id="skills"
    class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-8 sm:py-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-10 sm:mb-14">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
        >
          {{ $t("skils.technicalSkillsDashboard") }}
        </h1>
        <p
          class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
        >
          {{ $t("skils.interactiveVisualization") }}
        </p>

        <!-- View Mode Toggle -->
        <div class="flex justify-center mt-8 mb-6">
          <div
            class="inline-flex rounded-xl border border-slate-300 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800"
          >
            <button
              :class="[
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center',
                activeTab === 'dashboard'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white',
              ]"
              @click="activeTab = 'dashboard'"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              {{ $t("skils.dashboard") }}
            </button>
            <button
              :class="[
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center',
                activeTab === 'charts'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white',
              ]"
              @click="activeTab = 'charts'"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              {{ $t("skils.charts") }}
            </button>
            <button
              :class="[
                'px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center',
                activeTab === 'list'
                  ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white',
              ]"
              @click="activeTab = 'list'"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
              {{ $t("skils.list") }}
            </button>
          </div>
        </div>
      </div>

      <!-- Dashboard View -->
      <div v-if="activeTab === 'dashboard'" class="space-y-8">
        <!-- Top Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-90 font-medium">
                  {{ $t("skils.totalSkills") }}
                </p>
                <p class="text-3xl font-bold mt-2">{{ totalSkills }}</p>
              </div>
              <svg
                class="w-10 h-10 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div class="mt-4 text-sm opacity-90">
              <span class="inline-flex items-center">
                <span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                +{{ newSkillsThisYear }} {{ $t("skils.year") }}
              </span>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-90 font-medium">
                  {{ $t("skils.avgProficiency") }}
                </p>
                <p class="text-3xl font-bold mt-2">{{ averageProficiency }}%</p>
              </div>
              <svg
                class="w-10 h-10 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div class="mt-4">
              <div class="w-full bg-white/20 rounded-full h-2">
                <div
                  class="h-full bg-white rounded-full"
                  :style="{ width: `${averageProficiency}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-90 font-medium">
                  {{ $t("skils.categories") }}
                </p>
                <p class="text-3xl font-bold mt-2">{{ skillCategories }}</p>
              </div>
              <svg
                class="w-10 h-10 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-white/20 rounded-lg text-xs">{{
                $t("skils.backend")
              }}</span>
              <span class="px-2 py-1 bg-white/20 rounded-lg text-xs">{{
                $t("skils.frontend")
              }}</span>
              <span class="px-2 py-1 bg-white/20 rounded-lg text-xs">{{
                $t("skils.mobile")
              }}</span>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm opacity-90 font-medium">
                  {{ $t("skils.yearsExperience") }}
                </p>
                <p class="text-3xl font-bold mt-2">4+</p>
              </div>
              <svg
                class="w-10 h-10 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="mt-4 text-sm opacity-90">
              <span>{{
                $t("skils.MostExperiencedInMobileApplicationAndBackend")
              }}</span>
            </div>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Bar Chart -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ $t("skils.technicalSkillsDashboard") }}
              </h2>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-slate-500 dark:text-slate-400">{{
                  $t("skils.stackedView")
                }}</span>
                <div class="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
            </div>
            <div class="h-80 w-full">
              <v-chart
                :option="barChartOption"
                autoresize
                class="w-full h-full"
              />
            </div>
          </div>

          <!-- Donut Chart -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ $t("skils.skillDistribution") }}
              </h2>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-slate-500 dark:text-slate-400">{{
                  $t("skils.byCategory")
                }}</span>
                <div class="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </div>
            <div class="h-80 w-full">
              <v-chart
                :option="pieChartOption"
                autoresize
                class="w-full h-full"
              />
            </div>
          </div>
        </div>

        <!-- Category Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="category in skillsData"
            :key="category.title"
            class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-3">
                <div
                  :class="['p-2 rounded-xl', getIconBgColor(category.color)]"
                >
                  <div
                    class="w-6 h-6 text-white"
                    v-html="getCategoryIcon(category.title)"
                  ></div>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ category.title }}
                </h3>
              </div>
              <div
                class="px-3 py-1 rounded-full text-sm font-bold"
                :class="getProficiencyClass(categoryAverage(category.skills))"
              >
                {{ Math.round(categoryAverage(category.skills)) }}%
              </div>
            </div>

            <div class="mb-4">
              <div
                class="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-1"
              >
                <span>{{ $t("skils.overallProficiency") }}</span>
                <span>{{ Math.round(categoryAverage(category.skills)) }}%</span>
              </div>
              <div
                class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"
              >
                <div
                  class="h-full rounded-full transition-all duration-1000"
                  :class="getGradientClass(category.color)"
                  :style="{ width: `${categoryAverage(category.skills)}%` }"
                ></div>
              </div>
            </div>

            <div class="space-y-3">
              <div
                v-for="skill in category.skills.slice(0, 3)"
                :key="skill.name"
                class="flex items-center justify-between"
              >
                <span class="text-sm text-slate-700 dark:text-slate-300">{{
                  skill.name
                }}</span>
                <div class="flex items-center space-x-2">
                  <span
                    v-if="skill.years"
                    class="text-xs text-slate-500 dark:text-slate-400"
                  >
                    {{ skill.years }}y
                  </span>
                  <span
                    class="text-sm font-bold"
                    :class="getProficiencyColor(skill.proficiency)"
                  >
                    {{ skill.proficiency }}%
                  </span>
                </div>
              </div>
            </div>

            <div
              class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
            >
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in category.skills.slice(0, 3).map((s) => s.name)"
                  :key="tech"
                  class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                >
                  {{ tech }}
                </span>
                <span
                  v-if="category.skills.length > 3"
                  class="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-medium"
                >
                  +{{ category.skills.length - 3 }} {{ $t("skils.more") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts View -->
      <div v-else-if="activeTab === 'charts'" class="space-y-8">
        <!-- Bar Chart Section -->
        <div
          class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 sm:p-6"
        >
          <div class="flex items-center justify-between mb-6">
            <h2
              class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              {{ $t("skils.technicalSkillsDashboard") }}
            </h2>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-slate-500 dark:text-slate-400">{{
                $t("skils.interactiveBarChart")
              }}</span>
              <div class="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div class="h-[500px] w-full">
            <v-chart
              :option="detailedBarChartOption"
              autoresize
              class="w-full h-full"
            />
          </div>
          <div class="mt-4 text-sm text-slate-500 dark:text-slate-400">
            <p>
              {{ $t("skils.chartDescription") }}
            </p>
          </div>
        </div>

        <!-- Charts Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Radar Chart -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ $t("skils.skillsComparison") }}
              </h2>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-slate-500 dark:text-slate-400">{{
                  $t("skils.radarAnalysis")
                }}</span>
                <div class="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
            </div>
            <div class="h-[400px] w-full">
              <v-chart
                :option="radarChartOption"
                autoresize
                class="w-full h-full"
              />
            </div>
          </div>

          <!-- Line Chart -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ $t("skils.skillGrowth") }}
              </h2>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-slate-500 dark:text-slate-400">{{
                  $t("skils.timeline")
                }}</span>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div class="h-[400px] w-full">
              <v-chart
                :option="lineChartOption"
                autoresize
                class="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="space-y-8">
        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2 mb-6">
          <button
            v-for="category in skillsData"
            :key="category.title"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeCategory === category.title
                ? getActiveFilterClass(category.color)
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600',
            ]"
            @click="toggleCategoryFilter(category.title)"
          >
            {{ category.title }}
            <span class="ml-2 px-1.5 py-0.5 bg-white/20 rounded text-xs">
              {{ category.skills.length }}
            </span>
          </button>
          <button
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600',
            ]"
            @click="activeCategory = 'all'"
          >
            {{ $t("skils.allSkills") }}
            <span class="ml-2 px-1.5 py-0.5 bg-white/20 rounded text-xs">
              {{ totalSkills }}
            </span>
          </button>
        </div>

        <!-- Skills List -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Skills List -->
          <div class="space-y-6">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              {{ $t("skils.detailedSkills") }}
            </h2>
            <div
              v-for="(category, index) in filteredCategories"
              :key="category.title"
              class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6"
            >
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center space-x-3">
                  <div
                    :class="['p-3 rounded-xl', getIconBgColor(category.color)]"
                  >
                    <div
                      class="w-6 h-6 text-white"
                      v-html="getCategoryIcon(category.title)"
                    ></div>
                  </div>
                  <div>
                    <h3
                      class="text-lg font-bold text-slate-900 dark:text-white"
                    >
                      {{ category.title }}
                    </h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400">
                      {{ $t("skils.totalSkills", category.skills.length) }}
                      • {{ $t("skils.avg") }}:
                      {{ Math.round(categoryAverage(category.skills)) }}%
                    </p>
                  </div>
                </div>
                <button
                  class="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  @click="toggleCategory(index)"
                >
                  <svg
                    class="w-5 h-5 text-slate-400 transition-transform duration-200"
                    :class="{
                      'rotate-180': expandedCategories.includes(index),
                    }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              <div v-if="expandedCategories.includes(index)" class="space-y-4">
                <div
                  v-for="skill in category.skills"
                  :key="skill.name"
                  class="space-y-2"
                >
                  <div class="flex items-center justify-between">
                    <span
                      class="text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {{ skill.name }}
                    </span>
                    <div class="flex items-center space-x-3">
                      <span
                        v-if="skill.years"
                        class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {{ $t("skils.yearsExperience", skill.years) }}
                      </span>
                      <span
                        class="text-sm font-bold"
                        :class="getProficiencyColor(skill.proficiency)"
                      >
                        {{ skill.proficiency }}%
                      </span>
                    </div>
                  </div>
                  <div
                    class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden"
                  >
                    <div
                      class="h-full rounded-full transition-all duration-1000 ease-out"
                      :class="getGradientClass(category.color)"
                      :style="{ width: `${skill.proficiency}%` }"
                    />
                  </div>
                </div>
              </div>
              <div v-else class="flex flex-wrap gap-2">
                <span
                  v-for="skill in category.skills.slice(0, 6)"
                  :key="skill.name"
                  class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                >
                  {{ skill.name }}
                </span>
                <span
                  v-if="category.skills.length > 6"
                  class="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-lg text-xs font-medium"
                >
                  +{{ category.skills.length - 6 }} {{ $t("skils.more") }}
                </span>
              </div>
            </div>
          </div>

          <!-- Proficiency Summary & Legend -->
          <div class="space-y-6">
            <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
              <h2
                class="text-2xl font-bold text-slate-900 dark:text-white mb-6"
              >
                {{ $t("skils.proficiencySummary") }}
              </h2>
              <div class="space-y-6">
                <div
                  v-for="category in skillsData"
                  :key="category.title"
                  class="space-y-4"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-3 h-3 rounded-full"
                        :class="getColorClass(category.color)"
                      ></div>
                      <span
                        class="font-medium text-slate-700 dark:text-slate-300"
                        >{{ category.title }}</span
                      >
                    </div>
                    <span
                      class="font-bold"
                      :class="getCategoryColor(category.color)"
                    >
                      {{ Math.round(categoryAverage(category.skills)) }}%
                    </span>
                  </div>
                  <div
                    class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden"
                  >
                    <div
                      class="h-full rounded-full transition-all duration-1000"
                      :class="getGradientClass(category.color)"
                      :style="{ width: `${categoryAverage(category.skills)}%` }"
                    />
                  </div>
                </div>
              </div>

              <div
                class="mt-8 p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl"
              >
                <h3 class="font-bold text-slate-900 dark:text-white mb-4">
                  {{ $t("skils.skillLevelLegend") }}
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div
                    class="flex items-center space-x-3 p-2 bg-white/50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    <div>
                      <p
                        class="text-sm font-medium text-slate-900 dark:text-white"
                      >
                        {{ $t("skils.expert", [90, 100]) }}
                      </p>
                      <p class="text-xs text-slate-600 dark:text-slate-400">
                        {{ $t("skils.masterLevelProficiency") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center space-x-3 p-2 bg-white/50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div>
                      <p
                        class="text-sm font-medium text-slate-900 dark:text-white"
                      >
                        {{ $t("skils.advanced", [75, 89]) }}
                      </p>
                      <p class="text-xs text-slate-600 dark:text-slate-400">
                        {{ $t("skils.professionalExperience") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center space-x-3 p-2 bg-white/50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div>
                      <p
                        class="text-sm font-medium text-slate-900 dark:text-white"
                      >
                        {{ $t("skils.intermediate", [60, 74]) }}
                      </p>
                      <p class="text-xs text-slate-600 dark:text-slate-400">
                        {{ $t("skils.workingKnowledge") }}
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex items-center space-x-3 p-2 bg-white/50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div>
                      <p
                        class="text-sm font-medium text-slate-900 dark:text-white"
                      >
                        {{ $t("skils.learning", [60, 90]) }}
                      </p>
                      <p class="text-xs text-slate-600 dark:text-slate-400">
                        {{ $t("skils.currentlyLearning") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Top Skills -->
            <div
              class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white"
            >
              <h3 class="text-xl font-bold mb-4">
                {{ $t("skils.topSkills") }}
              </h3>
              <div class="space-y-3">
                <div
                  v-for="skill in topSkills"
                  :key="skill.name"
                  class="flex items-center justify-between"
                >
                  <span class="text-sm">{{ skill.name }}</span>
                  <div class="flex items-center space-x-2">
                    <span class="text-xs opacity-80">{{ skill.years }}y</span>
                    <span class="font-bold">{{ skill.proficiency }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { use } from "echarts/core";
import { useI18n } from "vue-i18n";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, RadarChart, PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  RadarComponent,
} from "echarts/components";
import VChart from "vue-echarts";

// Register ECharts components
use([
  CanvasRenderer,
  BarChart,
  RadarChart,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  RadarComponent,
]);

// State
const activeTab = ref("dashboard");
const expandedCategories = ref([0]);
const activeCategory = ref("all");
const { t } = useI18n();

// Sample skills data
const skillsData = ref([
  {
    title: t("skils.backendDevelopment"),
    color: "blue",
    skills: [
      { name: "Go", proficiency: 95, years: 3 },
      { name: "Node.js", proficiency: 90, years: 3 },
      { name: "Python", proficiency: 85, years: 2 },
      { name: "REST APIs", proficiency: 92, years: 4 },
      { name: "gRPC", proficiency: 88, years: 4 },
      { name: "PostgreSQL", proficiency: 82, years: 4 },
      { name: "Redis", proficiency: 85, years: 4 },
    ],
  },
  {
    title: t("skils.frontendDevelopment"),
    color: "green",
    skills: [
      { name: "Vue.js", proficiency: 95, years: 2 },
      { name: "React", proficiency: 85, years: 1 },
      { name: "TypeScript", proficiency: 90, years: 3 },
      { name: "JavaScript", proficiency: 95, years: 3 },
      { name: "Tailwind CSS", proficiency: 92, years: 1 },
      { name: "Vite", proficiency: 88, years: 3 },
      { name: "Next.js", proficiency: 80, years: 2 },
    ],
  },
  {
    title: t("skils.devOpsAndCloud"),
    color: "purple",
    skills: [
      { name: "Docker", proficiency: 85, years: 4 },
      { name: "AWS", proficiency: 80, years: 3 },
      { name: "CI/CD", proficiency: 88, years: 4 },
      { name: "Kubernetes", proficiency: 75, years: 2 },
      { name: "Linux", proficiency: 90, years: 3 },
      { name: "Terraform", proficiency: 72, years: 2 },
      { name: "Git", proficiency: 95, years: 8 },
    ],
  },
  {
    title: t("skils.mobileDevelopment"),
    color: "orange",
    skills: [
      { name: "Flutter", proficiency: 88, years: 5 },
      { name: "React Native", proficiency: 85, years: 1 },
      { name: "Dart", proficiency: 90, years: 5 },
      { name: "Firebase", proficiency: 82, years: 3 },
    ],
  },
]);

// Computed properties
const totalSkills = computed(() => {
  return skillsData.value.reduce(
    (total, category) => total + category.skills.length,
    0,
  );
});

const averageProficiency = computed(() => {
  const allSkills = skillsData.value.flatMap((category) => category.skills);
  const total = allSkills.reduce((sum, skill) => sum + skill.proficiency, 0);
  return Math.round(total / allSkills.length);
});

const skillCategories = computed(() => skillsData.value.length);
const newSkillsThisYear = computed(() => 12);

const topSkills = computed(() => {
  const allSkills = skillsData.value.flatMap((category) => category.skills);
  return [...allSkills]
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 5);
});

const filteredCategories = computed(() => {
  if (activeCategory.value === "all") return skillsData.value;
  return skillsData.value.filter((cat) => cat.title === activeCategory.value);
});

// Chart options
const barChartOption = computed(() => {
  const categories = skillsData.value.map((cat) => cat.title);
  const skills = ["Go", "Vue.js", "Docker", "Flutter", "Node.js", "React"];

  const seriesData = categories.map((category, catIndex) => {
    const colorMap = {
      blue: "#3b82f6",
      green: "#10b981",
      purple: "#8b5cf6",
      orange: "#f59e0b",
    };

    const data = skills.map((skillName) => {
      const categorySkills = skillsData.value[catIndex].skills;
      const skill = categorySkills.find((s) => s.name === skillName);
      return skill ? skill.proficiency : 0;
    });

    return {
      name: category,
      type: "bar",
      stack: "total",
      emphasis: { focus: "series" },
      data: data,
      itemStyle: {
        color: colorMap[skillsData.value[catIndex].color] || colorMap.blue,
      },
    };
  });

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b" },
      formatter: (params) => {
        let result = `<div class="font-bold text-slate-900 mb-2">${params[0].name}</div>`;
        params.forEach((param) => {
          if (param.value > 0) {
            result += `<div class="flex items-center my-1">
              <div class="w-2 h-2 rounded-full mr-2" style="background:${param.color}"></div>
              <span class="text-slate-700">${param.seriesName}:</span>
              <span class="font-bold ml-1">${param.value}%</span>
            </div>`;
          }
        });
        return result;
      },
    },
    legend: {
      data: categories,
      textStyle: { color: "#64748b" },
      top: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 40,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: skills,
      axisLabel: {
        color: "#64748b",
        rotate: 0,
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#64748b",
        formatter: "{value}%",
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
      max: 100,
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
          type: "dashed",
        },
      },
    },
    series: seriesData,
  };
});

const detailedBarChartOption = computed(() => {
  const categories = skillsData.value.map((cat) => cat.title);
  const allSkills = Array.from(
    new Set(skillsData.value.flatMap((cat) => cat.skills.map((s) => s.name))),
  );

  const seriesData = categories.map((category, catIndex) => {
    const colorMap = {
      blue: "#3b82f6",
      green: "#10b981",
      purple: "#8b5cf6",
      orange: "#f59e0b",
    };

    const data = allSkills.map((skillName) => {
      const categorySkills = skillsData.value[catIndex].skills;
      const skill = categorySkills.find((s) => s.name === skillName);
      return skill ? skill.proficiency : 0;
    });

    return {
      name: category,
      type: "bar",
      emphasis: { focus: "series" },
      data: data,
      itemStyle: {
        color: colorMap[skillsData.value[catIndex].color] || colorMap.blue,
        borderRadius: [2, 2, 0, 0],
      },
    };
  });

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b" },
    },
    legend: {
      data: categories,
      textStyle: { color: "#64748b" },
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 60,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: allSkills,
      axisLabel: {
        color: "#64748b",
        rotate: 45,
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#64748b",
        formatter: "{value}%",
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
      max: 100,
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
          type: "dashed",
        },
      },
    },
    series: seriesData,
  };
});

const pieChartOption = computed(() => {
  const data = skillsData.value.map((category) => ({
    name: category.title,
    value: category.skills.length,
    itemStyle: {
      color:
        {
          blue: "#3b82f6",
          green: "#10b981",
          purple: "#8b5cf6",
          orange: "#f59e0b",
        }[category.color] || "#3b82f6",
    },
  }));

  return {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b" },
      formatter: "{b}: {c} skills ({d}%)",
    },
    legend: {
      top: "bottom",
      textStyle: { color: "#64748b" },
    },
    series: [
      {
        name: "Skills Distribution",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
});

const radarChartOption = computed(() => {
  const indicators = skillsData.value[0].skills.map((skill) => ({
    name: skill.name,
    max: 100,
  }));

  const seriesData = skillsData.value.map((category, index) => {
    const colorMap = {
      blue: "#3b82f6",
      green: "#10b981",
      purple: "#8b5cf6",
      orange: "#f59e0b",
    };

    const data = indicators.map((indicator) => {
      const skill = category.skills.find((s) => s.name === indicator.name);
      return skill ? skill.proficiency : 0;
    });

    return {
      name: category.title,
      type: "radar",
      data: [
        {
          value: data,
          name: category.title,
          itemStyle: {
            color: colorMap[category.color] || colorMap.blue,
          },
          lineStyle: {
            color: colorMap[category.color] || colorMap.blue,
            width: 2,
          },
          areaStyle: {
            opacity: 0.2,
          },
        },
      ],
    };
  });

  return {
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b" },
    },
    legend: {
      data: skillsData.value.map((cat) => cat.title),
      textStyle: { color: "#64748b" },
      top: 10,
    },
    radar: {
      indicator: indicators,
      axisName: {
        color: "#64748b",
      },
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(255,255,255,0.1)", "rgba(241, 245, 249, 0.05)"],
        },
      },
    },
    series: seriesData,
  };
});

const lineChartOption = computed(() => {
  const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

  const seriesData = skillsData.value.map((category, index) => {
    const colorMap = {
      blue: "#3b82f6",
      green: "#10b981",
      purple: "#8b5cf6",
      orange: "#f59e0b",
    };

    // Generate growth data based on proficiency
    const baseProficiency = categoryAverage(category.skills) - 20;
    const data = years.map((year, i) => {
      const growth = Math.min(
        baseProficiency + i * 15,
        categoryAverage(category.skills),
      );
      return Math.round(growth);
    });

    return {
      name: category.title,
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 6,
      data: data,
      lineStyle: {
        width: 3,
        color: colorMap[category.color] || colorMap.blue,
      },
      itemStyle: {
        color: colorMap[category.color] || colorMap.blue,
      },
      areaStyle: {
        opacity: 0.1,
        color: colorMap[category.color] || colorMap.blue,
      },
    };
  });

  return {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      borderColor: "#e2e8f0",
      textStyle: { color: "#1e293b" },
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6b7280",
        },
      },
    },
    legend: {
      data: skillsData.value.map((cat) => cat.title),
      textStyle: { color: "#64748b" },
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 40,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: years,
      axisLabel: { color: "#64748b" },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#64748b",
        formatter: "{value}%",
      },
      axisLine: {
        lineStyle: {
          color: "#cbd5e1",
        },
      },
      max: 100,
      splitLine: {
        lineStyle: {
          color: "#e2e8f0",
          type: "dashed",
        },
      },
    },
    series: seriesData,
  };
});

// Helper functions
const getGradientClass = (color) => {
  const gradients = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600",
    orange: "bg-gradient-to-r from-orange-500 to-orange-600",
    red: "bg-gradient-to-r from-red-500 to-red-600",
  };
  return gradients[color] || gradients.blue;
};

const getIconBgColor = (color) => {
  const colors = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600",
    orange: "bg-gradient-to-r from-orange-500 to-orange-600",
    red: "bg-gradient-to-r from-red-500 to-red-600",
  };
  return colors[color] || colors.blue;
};

const getColorClass = (color) => {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };
  return colors[color] || colors.blue;
};

const getCategoryColor = (color) => {
  const colors = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400",
    red: "text-red-600 dark:text-red-400",
  };
  return colors[color] || colors.blue;
};

const getProficiencyColor = (proficiency) => {
  if (proficiency >= 90) return "text-green-600 dark:text-green-400";
  if (proficiency >= 75) return "text-blue-600 dark:text-blue-400";
  if (proficiency >= 60) return "text-yellow-600 dark:text-yellow-400";
  return "text-orange-600 dark:text-orange-400";
};

const getProficiencyClass = (proficiency) => {
  if (proficiency >= 90)
    return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  if (proficiency >= 75)
    return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
  if (proficiency >= 60)
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
  return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
};

const getActiveFilterClass = (color) => {
  const classes = {
    blue: "bg-gradient-to-r from-blue-600 to-blue-700 text-white",
    green: "bg-gradient-to-r from-green-600 to-green-700 text-white",
    purple: "bg-gradient-to-r from-purple-600 to-purple-700 text-white",
    orange: "bg-gradient-to-r from-orange-600 to-orange-700 text-white",
    red: "bg-gradient-to-r from-red-600 to-red-700 text-white",
  };
  return classes[color] || classes.blue;
};

const getCategoryIcon = (title) => {
  const icons = {
    "Backend Development": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>`,
    "Frontend Development": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
    "DevOps & Cloud": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"></path></svg>`,
    "Mobile Development": `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
  };
  return icons[title] || icons["Backend Development"];
};

const categoryAverage = (skills) => {
  const total = skills.reduce((sum, skill) => sum + skill.proficiency, 0);
  return total / skills.length;
};

const toggleCategory = (index) => {
  const currentIndex = expandedCategories.value.indexOf(index);
  if (currentIndex === -1) {
    expandedCategories.value.push(index);
  } else {
    expandedCategories.value.splice(currentIndex, 1);
  }
};

const toggleCategoryFilter = (category) => {
  activeCategory.value = activeCategory.value === category ? "all" : category;
};

onMounted(() => {
  window.addEventListener("resize", () => {
    // ECharts will auto-resize due to autoresize prop
  });
});
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Dark mode scrollbar */
.dark ::-webkit-scrollbar-track {
  background: #374151;
}

.dark ::-webkit-scrollbar-thumb {
  background: #6b7280;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}

/* ECharts container */
.echarts {
  width: 100%;
  height: 100%;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Animation for page load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section {
  animation: fadeInUp 0.6s ease-out;
}

/* Hover effects */
.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

/* Glass effect for charts */
.bg-white {
  backdrop-filter: blur(10px);
}

.dark .bg-slate-800 {
  backdrop-filter: blur(10px);
}

/* Gradient text */
.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .h-80 {
    height: 300px;
  }

  .h-\[500px\] {
    height: 400px;
  }
}

/* Chart tooltip styling */
:deep(.echarts-tooltip) {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
  border-radius: 8px !important;
  border: 1px solid #e2e8f0 !important;
}

.dark :deep(.echarts-tooltip) {
  background: #1e293b !important;
  border-color: #475569 !important;
}

:deep(.echarts-legend) {
  padding: 10px 0 !important;
}

:deep(.echarts-legend-item) {
  padding: 4px 8px !important;
  border-radius: 6px !important;
}

.dark :deep(.echarts-legend-item) {
  color: #cbd5e1 !important;
}
</style>
