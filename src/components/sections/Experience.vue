<template>
  <section 
    id="experience" 
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20 py-8 sm:py-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="relative inline-block">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Journey
          </h1>
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-8">
          My career path and the experiences that have shaped me as a software engineer
        </p>
      </div>

      <!-- Timeline Navigation -->
      <div class="mb-12">
        <div class="flex overflow-x-auto space-x-4 pb-4">
          <button
            v-for="(item, index) in experienceItems"
            :key="item.id"
            @click="scrollToExperience(item.id)"
            class="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
            :class="activeExperience === item.id 
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
              : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800'
            "
          >
            {{ item.companyShort || item.company }}
          </button>
        </div>
      </div>

      <!-- Main Timeline -->
      <div class="relative">
        <!-- Vertical timeline line -->
        <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
        
        <!-- Timeline Items -->
        <div class="space-y-12 md:space-y-20">
          <div
            v-for="(item, index) in experienceItems"
            :key="item.id"
            :id="`exp-${item.id}`"
            class="relative"
            :class="{
              'animate-slide-in-left': index % 2 === 0,
              'animate-slide-in-right': index % 2 !== 0,
              'delay-100': index === 1,
              'delay-200': index === 2,
              'delay-300': index === 3
            }"
          >
            <!-- Timeline Node -->
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-20">
              <div class="relative">
                <!-- Outer ring -->
                <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-20 animate-pulse"></div>
                
                <!-- Main node -->
                <div 
                  class="relative w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 shadow-xl"
                  :class="getCompanyColor(item.company)"
                >
                  <!-- Current job indicator -->
                  <div 
                    v-if="item.isCurrent"
                    class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-ping"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Content Card -->
            <div class="ml-12 md:ml-0 md:w-5/12" :class="index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'">
              <div 
                class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
                :class="activeExperience === item.id ? 'ring-2 ring-blue-500 scale-[1.02]' : ''"
              >
                <!-- Card Header with Gradient -->
                <div 
                  class="relative p-6 text-white"
                  :class="getCompanyGradient(item.company)"
                >
                  <div class="absolute inset-0 bg-black/20"></div>
                  <div class="relative z-10">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-xl font-bold">{{ item.company }}</h3>
                      <div 
                        v-if="item.isCurrent"
                        class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                      >
                        Current
                      </div>
                    </div>
                    <h4 class="text-lg font-semibold mb-2">{{ item.position }}</h4>
                    
                    <div class="flex items-center justify-between text-sm">
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>{{ item.location }}</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>{{ formatDate(item.startDate) }} - {{ item.endDate ? formatDate(item.endDate) : 'Present' }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Card Content -->
                <div class="p-6">
                  <!-- Duration Badge -->
                  <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6" :class="getDurationColor(item.startDate, item.endDate)">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ calculateDuration(item.startDate, item.endDate) }}
                  </div>

                  <!-- Description -->
                  <div class="space-y-4 mb-6">
                    <div 
                      v-for="(desc, descIndex) in item.description"
                      :key="descIndex"
                      class="flex items-start group/item"
                    >
                      <div class="flex-shrink-0 mt-1 mr-3">
                        <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 group-hover/item:scale-150 transition-transform"></div>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {{ desc }}
                      </p>
                    </div>
                  </div>

                  <!-- Technologies -->
                  <div>
                    <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Technologies & Tools</p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in item.technologies"
                        :key="tech"
                        class="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Key Achievements -->
                  <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Key Contributions</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span class="text-sm text-slate-600 dark:text-slate-300">Enterprise Backends</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span class="text-sm text-slate-600 dark:text-slate-300">API Development</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span class="text-sm text-slate-600 dark:text-slate-300">Cloud Infrastructure</span>
                      </div>
                      <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span class="text-sm text-slate-600 dark:text-slate-300">Team Collaboration</span>
                      </div>
                    </div>
                  </div>

                  <!-- Card Footer -->
                  <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div class="flex items-center justify-between">
                      <button
                        @click="downloadResume"
                        class="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/btn"
                      >
                        <svg class="w-4 h-4 mr-2 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        View Full Role Details
                      </button>
                      <div class="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span>Full-time Position</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Year Indicator -->
            <div class="mt-4 ml-12 md:ml-0 md:absolute md:top-0" :class="index % 2 === 0 ? 'md:right-full md:mr-8 md:text-right' : 'md:left-full md:ml-8'">
              <div class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {{ new Date(item.startDate).getFullYear() }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Summary -->
      <div class="mt-20">
        <div class="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-2xl p-8 backdrop-blur-sm">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Career Highlights</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{{ totalYears }}+</div>
              <div class="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{{ experienceItems.length }}</div>
              <div class="text-sm text-slate-600 dark:text-slate-400">Companies</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{{ totalTechnologies }}</div>
              <div class="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{{ totalProjects }}+</div>
              <div class="text-sm text-slate-600 dark:text-slate-400">Projects</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Next Steps CTA -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Build Something Amazing?</h3>
        <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Let's collaborate on your next project and create impactful solutions together.
        </p>
        <button
          @click="scrollToContact"
          class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Get In Touch
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

// State
const activeExperience = ref('1')

// Experience data
const experienceItems = [
  {
    id: '1',
    company: 'Hera Sawda Technologies Co',
    companyShort: 'Hera Sawda',
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
    technologies: ['Go', 'Gin', 'gRPC', 'Protobuf', 'GORM', 'Docker', 'Kubernetes'],
    isCurrent: true
  },
  {
    id: '2',
    company: 'DeepMeels',
    companyShort: 'DeepMeels',
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
    technologies: ['Next.js', 'Vercel', 'AWS', 'Firebase', 'PostgreSQL', 'MySQL', 'MongoDB'],
    isCurrent: false
  },
  {
    id: '3',
    company: 'Boutiqaat',
    companyShort: 'Boutiqaat',
    position: 'Odoo Developer',
    location: 'Egypt',
    startDate: '2023-01',
    endDate: '2023-06',
    description: [
      'Customized and extended Odoo modules (Sales, Inventory, Account, Purchase) to align with business needs.',
      'Developed and maintained custom modules using Python, XML, and PostgreSQL.',
      'Managed database migrations and performance optimization; collaborated with the mobile app team to ensure seamless ERP and mobile integration.'
    ],
    technologies: ['Python', 'XML', 'PostgreSQL', 'Odoo'],
    isCurrent: false
  },
  {
    id: '4',
    company: 'Code Havi',
    companyShort: 'Code Havi',
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
    technologies: ['Flutter', 'Dart', 'Provider', 'Bloc', 'Riverpod', 'Firebase', 'Git'],
    isCurrent: false
  }
]

// Computed properties
const totalYears = computed(() => {
  const earliest = Math.min(...experienceItems.map(item => new Date(item.startDate).getFullYear()))
  const currentYear = new Date().getFullYear()
  return currentYear - earliest
})

const totalTechnologies = computed(() => {
  const allTech = experienceItems.flatMap(item => item.technologies)
  const uniqueTech = new Set(allTech)
  return uniqueTech.size
})

const totalProjects = computed(() => {
  // Estimate based on experience
  return 50
})

// Helper functions
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

const getCompanyColor = (company: string) => {
  const colors: Record<string, string> = {
    'Hera Sawda Technologies Co': 'bg-gradient-to-r from-blue-500 to-blue-600',
    'DeepMeels': 'bg-gradient-to-r from-green-500 to-green-600',
    'Boutiqaat': 'bg-gradient-to-r from-purple-500 to-purple-600',
    'Code Havi': 'bg-gradient-to-r from-orange-500 to-orange-600'
  }
  return colors[company] || 'bg-gradient-to-r from-blue-500 to-indigo-500'
}

const getCompanyGradient = (company: string) => {
  const gradients: Record<string, string> = {
    'Hera Sawda Technologies Co': 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700',
    'DeepMeels': 'bg-gradient-to-r from-green-600 via-green-700 to-emerald-700',
    'Boutiqaat': 'bg-gradient-to-r from-purple-600 via-purple-700 to-violet-700',
    'Code Havi': 'bg-gradient-to-r from-orange-600 via-orange-700 to-amber-700'
  }
  return gradients[company] || 'bg-gradient-to-r from-blue-600 to-indigo-700'
}

const getDurationColor = (startDate: string, endDate?: string) => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  
  if (months > 24) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
  if (months > 12) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
  return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
}

const scrollToExperience = (id: string) => {
  activeExperience.value = id
  const element = document.getElementById(`exp-${id}`)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    })
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const downloadResume = () => {
  console.log('Downloading resume...')
  // Implement resume download logic here
}

onMounted(() => {
  // Auto-activate first experience on mount
  setTimeout(() => {
    activeExperience.value = '1'
  }, 100)
})
</script>

<style scoped>
/* Custom animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

/* Glass effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Hover effects */
.group:hover .group-hover\:scale-150 {
  transform: scale(1.5);
}

/* Gradient text */
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Shadow utilities */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
}

/* Responsive timeline */
@media (max-width: 768px) {
  .timeline-line {
    left: 32px;
  }
  
  .timeline-node {
    left: 32px;
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Card hover effect */
.hover\:-translate-y-2:hover {
  transform: translateY(-8px);
}

/* Pulse animation for current job */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Bounce animation for icons */
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>