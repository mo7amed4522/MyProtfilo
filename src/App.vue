<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from './components/layout/Header.vue'
import Hero from './components/sections/Hero.vue'
import Projects from './components/sections/Projects.vue'
import Skills from './components/sections/Skills.vue'
import Experience from './components/sections/Experience.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/layout/Footer.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

// Animation states for each section
const sectionAnimations = ref({
  hero: false,
  projects: false,
  skills: false,
  experience: false,
  contact: false
})

onMounted(() => {
  // Initialize theme
  themeStore.initializeTheme()
  
  // Trigger animations with delays
  setTimeout(() => { sectionAnimations.value.hero = true }, 100)
  setTimeout(() => { sectionAnimations.value.projects = true }, 300)
  setTimeout(() => { sectionAnimations.value.skills = true }, 500)
  setTimeout(() => { sectionAnimations.value.experience = true }, 700)
  setTimeout(() => { sectionAnimations.value.contact = true }, 900)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <Header />
    
    <main>
      <div :class="{ 'animate-slide-in-up animate-fade-in': sectionAnimations.hero }">
        <Hero />
      </div>
      
      <div :class="{ 'animate-slide-in-up animate-fade-in': sectionAnimations.projects }" class="delay-200">
        <Projects />
      </div>
      
      <div :class="{ 'animate-slide-in-up animate-fade-in': sectionAnimations.skills }" class="delay-300">
        <Skills />
      </div>
      
      <div :class="{ 'animate-slide-in-up animate-fade-in': sectionAnimations.experience }" class="delay-500">
        <Experience />
      </div>
      
      <div :class="{ 'animate-slide-in-up animate-fade-in': sectionAnimations.contact }" class="delay-700">
        <Contact />
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}
</style>