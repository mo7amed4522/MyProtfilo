<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { EXPERIENCE_DATA } from '../../constants'

const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  } catch {
    return dateString
  }
}

const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`
  }
}

// Add isCurrent property to experience data
const experienceItems = [
  {
    id: '1',
    company: 'Hera Sawda Technologies Co',
    position: 'Back End Developer',
    location: 'United Arab Emirates',
    startDate: '2025-08',
    endDate: undefined,
    description: [
      'Full-time, on-site; Go monolith service-oriented architecture for enterprise backends.',
      'Designed RESTful APIs with Gin; defined gRPC services and Protobuf contracts.',
      'Built persistence layers with GORM; implemented clean architecture and testing.',
      'Containerized services with Docker; collaborated on Kubernetes deployments.',
      'Implemented observability and CI/CD; improved reliability and code quality.'
    ],
    technologies: ['Go', 'Gin', 'gRPC', 'Protobuf', 'GORM', 'Docker', 'Kubernetes']
  },
  {
    id: '2',
    company: 'DeepMeels',
    position: 'Mobile Software Engineer',
    location: 'Sweden',
    startDate: '2023-02',
    endDate: '2025-02',
    description: [
      'Built and maintained RESTful APIs and serverless backend services using Next.js API routes.',
      'Integrated third-party services, authentication systems (OAuth, JWT), and payment gateways.',
      'Worked with cloud services like Vercel, AWS, and Firebase for hosting and deployment.',
      'Optimized database operations and managed backend logic with PostgreSQL, MySQL, and MongoDB.'
    ],
    technologies: ['Next.js', 'Vercel', 'AWS', 'Firebase', 'PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    id: '3',
    company: 'Boutiqaat',
    position: 'Odoo Developer',
    location: 'Egypt',
    startDate: '2023-01',
    endDate: '2023-06',
    description: [
      'Customized and extended Odoo modules (Sales, Inventory, Account, Purchase) to align with business needs.',
      'Developed and maintained custom modules using Python, XML, and PostgreSQL.',
      'Managed database migrations and performance optimization; collaborated with the mobile app team to ensure seamless ERP and mobile integration.'
    ],
    technologies: ['Python', 'XML', 'PostgreSQL', 'Odoo']
  },
  {
    id: '4',
    company: 'Code Havi',
    position: 'Flutter Developer',
    location: 'UAE',
    startDate: '2021-02',
    endDate: '2023-02',
    description: [
      'Engineered a cross-platform mobile application using Flutter, reducing development time by 40% and enhancing user engagement by 30%.',
      'Developed and deployed multiple feature-rich Flutter applications for Android and iOS platforms.',
      'Integrated RESTful APIs, WebSocket, Firebase services, and third-party SDKs.',
      'Implemented clean architecture and state management solutions like Provider, Bloc, and Riverpod.',
      'Ensured high code quality through testing (unit, integration, golden) and version control (Git, GitHub).',
      'Collaborated with cross-functional teams to define requirements, design architectures, and implement features.',
      'Actively participated in code reviews, provided feedback, and ensured code quality standards.'
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'Bloc', 'Riverpod', 'Firebase', 'Git']
  }
].map(item => ({
  ...item,
  isCurrent: !item.endDate
}))
</script>

<template>
  <section id="experience" class="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
          Work Experience
        </h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          My professional journey and the experiences that have shaped my skills and expertise.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300 dark:bg-slate-600"></div>

        <!-- Experience Items -->
        <div
          v-for="(item, index) in experienceItems"
          :key="item.id"
          class="mb-12"
          :class="{ 'md:mb-16': index !== experienceItems.length - 1 }"
        >
          <div class="flex flex-col md:flex-row items-center" :class="index % 2 === 0 ? '' : 'md:flex-row-reverse'">
            <!-- Content -->
            <div
              class="w-full md:w-5/12 mb-4 md:mb-0"
              :class="index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'"
            >
              <div
                class="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                :class="index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'"
              >
                <div class="flex items-center mb-3" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <svg class="w-5 h-5 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                    {{ item.company }}
                  </h3>
                </div>

                <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  {{ item.position }}
                </h4>

                <div class="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-4 space-x-4" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ item.location }}
                  </div>
                  <div class="flex items-center">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {{ formatDate(item.startDate) }} - {{ item.endDate ? formatDate(item.endDate) : 'Present' }}
                  </div>
                  <div class="text-blue-600 dark:text-blue-400 font-medium">
                    ({{ calculateDuration(item.startDate, item.endDate) }})
                  </div>
                </div>

                <ul class="space-y-2 mb-4 text-slate-700 dark:text-slate-300">
                  <li
                    v-for="(desc, descIndex) in item.description"
                    :key="descIndex"
                    class="flex items-start"
                  >
                    <span class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span class="text-sm leading-relaxed">{{ desc }}</span>
                  </li>
                </ul>

                <div class="flex flex-wrap gap-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                  <span
                    v-for="tech in item.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Timeline Dot -->
            <div class="hidden md:flex w-2/12 justify-center">
              <div class="relative">
                <div class="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10"></div>
                <div
                  v-if="item.isCurrent"
                  class="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping"
                ></div>
              </div>
            </div>

            <!-- Empty Space for Desktop -->
            <div class="hidden md:block w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>