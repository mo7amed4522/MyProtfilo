<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { Menu, Close } from '@element-plus/icons-vue'
// Import SVG components
import GithubIcon from '../../assets/imgs/github.svg'
import GitlabIcon from '../../assets/imgs/gitlab.svg'
import GmailIcon from '../../assets/imgs/gmail.svg'
import LinkedinIcon from '../../assets/imgs/linkedin.svg'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/mo7amed4522', label: 'GitHub' },
  { icon: GitlabIcon, href: 'https://gitlab.com/mo7amed24', label: 'GitLab' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: GmailIcon, href: 'mailto:khaled@example.com', label: 'Email' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
  
  // Update active section based on scroll position
  const sections = navItems.map(item => item.href.slice(1))
  const current = sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom > 100
    }
    return false
  })
  
  if (current) {
    activeSection.value = current
  }
}

const scrollToSection = (href: string) => {
  const sectionId = href.slice(1)
  const element = document.getElementById(sectionId)
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial call
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled 
      ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/70 border-b border-slate-200/40 dark:border-slate-800/40 shadow-xl'
      : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center gap-4">
          <div class="relative">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold shadow-2xl">
              KM
            </div>
            <div class="absolute -top-1 -right-1 animate-spin">
              <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l1.09 3.09L16 2l-1.09 3.09L18 6l-3.09 1.09L16 10l-3.09-1.09L12 12l-1.09-3.09L8 10l1.09-3.09L6 6l3.09-1.09L8 2l3.09 1.09L12 0z"/>
              </svg>
            </div>
          </div>
          <div class="hidden sm:flex flex-col">
            <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Khaled Mohamed
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Full Stack Developer
            </span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center justify-center gap-5">
          <button
            v-for="item in navItems"
            :key="item.href"
            @click="scrollToSection(item.href)"
            class="relative px-8 py-4 rounded-3xl text-base font-semibold transition-all duration-300"
            :class="activeSection === item.href.slice(1)
              ? 'text-white shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm'
            "
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ item.label }}
            </span>
          </button>
        </nav>

        <div class="flex items-center justify-end gap-4">
          <div class="hidden lg:flex items-center gap-3 mr-2">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="p-3 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white transition-all duration-300 rounded-xl hover:shadow-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"
              :aria-label="link.label"
            >
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>

          <div class="ml-2">
            <ThemeToggle />
          </div>

          <button
            class="lg:hidden p-3 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white rounded-xl hover:shadow-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 transition-all duration-300"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            aria-label="Toggle menu"
          >
            <transition name="menu" mode="out-in">
              <Close v-if="isMobileMenuOpen" class="w-6 h-6" />
              <Menu v-else class="w-6 h-6" />
            </transition>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div 
        v-show="isMobileMenuOpen"
        class="lg:hidden border-t border-slate-300/50 dark:border-slate-700/50 bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 backdrop-blur-xl"
      >
        <div class="px-4 py-8 space-y-3">
          <button
            v-for="(item, index) in navItems"
            :key="item.href"
            @click="scrollToSection(item.href)"
            class="relative block w-full text-left px-7 py-5 rounded-2xl text-xl font-semibold transition-all duration-300"
            :class="activeSection === item.href.slice(1)
              ? 'text-white shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500'
              : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/50 dark:bg-slate-800/50'
            "
          >
            <span class="relative z-10 flex items-center justify-between">
              <span class="flex items-center gap-3">
                {{ item.label }}
                <svg v-if="activeSection === item.href.slice(1)" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0l1.09 3.09L16 2l-1.09 3.09L18 6l-3.09 1.09L16 10l-3.09-1.09L12 12l-1.09-3.09L8 10l1.09-3.09L6 6l3.09-1.09L8 2l3.09 1.09L12 0z"/>
                </svg>
              </span>
              <div v-if="activeSection === item.href.slice(1)" class="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </span>
          </button>

          <!-- Mobile Social Links -->
          <div class="pt-8 mt-6 border-t border-slate-300/30 dark:border-slate-700/30 flex items-center justify-center space-x-6">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white transition-all duration-300 rounded-xl hover:shadow-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"
              :aria-label="link.label"
            >
              <component :is="link.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>

  <!-- Spacer to account for fixed header -->
  <div class="h-20"></div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  height: 0;
}

.slide-enter-to {
  opacity: 1;
  height: auto;
}

.slide-leave-from {
  opacity: 1;
  height: auto;
}

.slide-leave-to {
  opacity: 0;
  height: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.2s ease;
}

.menu-enter-from {
  transform: rotate(-180deg);
  opacity: 0;
}

.menu-enter-to {
  transform: rotate(0);
  opacity: 1;
}

.menu-leave-from {
  transform: rotate(0);
  opacity: 1;
}

.menu-leave-to {
  transform: rotate(180deg);
  opacity: 0;
}
</style>