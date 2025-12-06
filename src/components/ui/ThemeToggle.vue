<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { Sunny, Moon } from '@element-plus/icons-vue'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.isDark)
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <transition name="rotate" mode="out-in">
      <Sunny v-if="isDark" class="w-5 h-5" />
      <Moon v-else class="w-5 h-5" />
    </transition>
  </button>
</template>

<style scoped>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.3s ease;
}

.rotate-enter-from {
  transform: rotate(180deg);
}

.rotate-leave-to {
  transform: rotate(-180deg);
}
</style>