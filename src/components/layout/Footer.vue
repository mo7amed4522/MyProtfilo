<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { icon: 'Github', href: 'https://github.com/mo7amed4522', label: 'GitHub Profile' },
  { icon: 'Linkedin', href: '#', label: 'LinkedIn Profile' },
  { icon: 'Mail', href: 'mailto:khaled.mohamed@example.com', label: 'Send Email' },
]

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' },
    ]
  },
  {
    title: 'Technologies',
    links: [
      { label: 'Go', href: 'https://golang.org' },
      { label: 'Flutter', href: 'https://flutter.dev' },
      { label: 'TypeScript', href: 'https://www.typescriptlang.org' },
      { label: 'Next.js', href: 'https://nextjs.org' },
      { label: 'AWS', href: 'https://aws.amazon.com' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resume', href: '#' },
      { label: 'GitHub', href: 'https://github.com/mo7amed4522' },
      { label: 'Blog', href: '#' },
      { label: 'Email', href: 'mailto:khaled.mohamed@example.com' },
    ]
  }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<template>
  <footer class="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Brand & Description -->
          <div class="lg:col-span-1">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                KM
              </div>
              <span class="text-xl font-bold">Khaled Mohamed</span>
            </div>
            <p class="text-slate-400 mb-6 leading-relaxed">
              Backend & Mobile Engineer passionate about building scalable solutions with Go, Flutter, and cloud technologies.
            </p>

            <!-- Social Links -->
            <div class="flex items-center space-x-4">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors duration-200 shadow-sm"
                :aria-label="link.label"
              >
                <svg v-if="link.icon === 'Github'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <svg v-else-if="link.icon === 'Linkedin'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <svg v-else-if="link.icon === 'Mail'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Footer Links -->
          <div v-for="section in footerLinks" :key="section.title">
            <h3 class="text-lg font-semibold mb-4">{{ section.title }}</h3>
            <ul class="space-y-2">
              <li v-for="link in section.links" :key="link.label">
                <a
                  :href="link.href"
                  class="text-slate-400 hover:text-white transition-colors duration-200"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:khaled.mohamed@example.com" class="text-slate-400 hover:text-white transition-colors duration-200">
                  khaled.mohamed@example.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-slate-400">Dubai, UAE</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="text-slate-400">+971 50 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-slate-800 py-8">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div class="flex items-center space-x-2 text-slate-400 text-sm">
            <span>© {{ currentYear }} Khaled Mohamed</span>
            <span>•</span>
            <span>Built with</span>
            <div class="animate-pulse">
              <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <span>and Vue.js</span>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="scrollToTop"
              class="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
              </svg>
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>