<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/layout/Header.vue'
import Hero from './components/sections/Hero.vue'
import Projects from './components/sections/Projects.vue'
import Skills from './components/sections/Skills.vue'
import Experience from './components/sections/Experience.vue'
import Contact from './components/sections/Contact.vue'
import Footer from './components/layout/Footer.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  // Initialize theme
  themeStore.initializeTheme()
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-900">
    <Header />
    
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
</style>