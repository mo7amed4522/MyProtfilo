<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80',
      isScrolled
        ? 'border-b border-slate-200/40 dark:border-slate-800/40 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5'
        : '',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo / Brand -->
        <div class="flex items-center gap-4">
          <div class="relative group">
            <div
              class="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500"
            >
              <span class="text-white text-xl font-bold tracking-tight"
                >KM</span
              >
              <div
                class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"
              ></div>
            </div>
            <!-- Animated ring -->
            <div class="absolute inset-0 rounded-2xl animate-spin-slow">
              <div
                class="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-purple-400 rounded-2xl"
              ></div>
            </div>
          </div>

          <div class="hidden sm:flex flex-col">
            <span
              class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              {{ t("header.khaledMohamed") }}
            </span>
            <span
              class="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mt-1"
            >
              {{ t("header.backendMobileEngineer") }}
            </span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-2">
          <button
            v-for="item in navItems"
            :key="item.href"
            class="relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group"
            @click="scrollToSection(item.href)"
          >
            <span class="relative z-10 flex items-center gap-2">
              <span
                :class="
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors'
                "
              >
                {{ item.label }}
              </span>
              <span
                v-if="activeSection === item.href.slice(1)"
                class="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"
              ></span>
            </span>

            <!-- Background gradient (active/hover) -->
            <div
              class="absolute inset-0 rounded-xl transition-all duration-300"
              :class="[
                'bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20',
                activeSection === item.href.slice(1)
                  ? '!bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg shadow-blue-500/30 scale-105'
                  : 'group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-purple-600/20 dark:group-hover:from-blue-600/30 dark:group-hover:to-purple-600/30',
              ]"
            ></div>
          </button>
        </nav>

        <!-- Right Section -->
        <div class="flex items-center gap-4">
          <!-- Social Links -->
          <div class="hidden lg:flex items-center gap-3 mr-4">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :class="[
                'p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl',
                getSocialLinkClass(link.label),
              ]"
              :aria-label="link.label"
              :title="link.label"
            >
              <div class="w-5 h-5" v-html="link.icon"></div>
            </a>
          </div>

          <div class="hidden lg:block">
            <select
              v-model="currentLang"
              class="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
              @change="changeLang"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="zh_CN">CH</option>
            </select>
          </div>

          <div class="lg:hidden relative">
            <button
              class="p-3 rounded-xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"
              :aria-label="t('header.techStack')"
              @click="isLangMenuOpen = !isLangMenuOpen"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4a8 8 0 108 8 8 8 0 00-8-8zm0 0c-3 0-5 4-5 8s2 8 5 8 5-4 5-8-2-8-5-8m0 0h0"
                />
              </svg>
            </button>
            <div
              v-show="isLangMenuOpen"
              class="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl z-50"
            >
              <button
                class="w-full px-4 py-2 text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                @click="setLang('en')"
              >
                EN
              </button>
              <button
                class="w-full px-4 py-2 text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                @click="setLang('ar')"
              >
                AR
              </button>
              <button
                class="w-full px-4 py-2 text-left text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                @click="setLang('zh_CN')"
              >
                CH
              </button>
            </div>
          </div>

          <!-- Theme Toggle -->
          <div class="mr-2">
            <ThemeToggle />
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden relative p-3 rounded-xl transition-all duration-300 hover:shadow-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20 group"
            :aria-label="t('header.toggleMenu')"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <div class="w-6 h-6 relative">
              <!-- Hamburger / Close animation -->
              <span
                :class="[
                  'absolute left-0 w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300',
                  isMobileMenuOpen
                    ? 'rotate-45 top-1/2 -translate-y-1/2'
                    : 'top-1',
                ]"
              ></span>
              <span
                :class="[
                  'absolute left-0 w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2',
                ]"
              ></span>
              <span
                :class="[
                  'absolute left-0 w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300',
                  isMobileMenuOpen
                    ? '-rotate-45 top-1/2 -translate-y-1/2'
                    : 'bottom-1',
                ]"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-t border-slate-200/40 dark:border-slate-800/40 shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5"
      >
        <div class="px-4 py-6 space-y-3">
          <!-- Navigation Items -->
          <button
            v-for="item in navItems"
            :key="item.href"
            class="relative w-full text-left px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 group"
            @click="scrollToSection(item.href)"
          >
            <span class="relative z-10 flex items-center justify-between">
              <span class="flex items-center gap-3">
                <!-- Icon based on section -->
                <span
                  class="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors"
                >
                  <span v-html="getSectionIcon(item.key)"></span>
                </span>
                <span
                  :class="[
                    'transition-colors',
                    activeSection === item.href.slice(1)
                      ? 'text-white'
                      : 'text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400',
                  ]"
                >
                  {{ item.label }}
                </span>
              </span>

              <span
                v-if="activeSection === item.href.slice(1)"
                class="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"
              ></span>
            </span>

            <!-- Background -->
            <div
              class="absolute inset-0 rounded-xl transition-all duration-300"
              :class="[
                activeSection === item.href.slice(1)
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-lg shadow-blue-500/30'
                  : 'bg-slate-100/50 dark:bg-slate-800/50 group-hover:bg-gradient-to-r group-hover:from-blue-600/10 group-hover:to-purple-600/10',
              ]"
            ></div>
          </button>

          <!-- Mobile Social Links -->
          <div
            class="pt-6 mt-6 border-t border-slate-200/40 dark:border-slate-800/40"
          >
            <p
              class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 px-2"
            >
              {{ t("header.connect") }}
            </p>
            <div class="flex items-center justify-center gap-6">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl',
                  getSocialLinkClass(link.label),
                ]"
                :aria-label="link.label"
                :title="link.label"
              >
                <div class="w-6 h-6" v-html="link.icon"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>

  <!-- Spacer to account for fixed header -->
  <div class="h-20"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import { getCacheLang, setCacheLang } from "@/i18n/use-locale";
import ThemeToggle from "../ui/ThemeToggle.vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isLangMenuOpen = ref(false);
const activeSection = ref("home");
const { t, locale } = useI18n();
const currentLang = ref(getCacheLang());

const navItems = computed(() => [
  { key: "home", label: t("nav.home"), href: "#home" },
  { key: "projects", label: t("nav.projects"), href: "#projects" },
  { key: "skills", label: t("nav.skills"), href: "#skills" },
  { key: "experience", label: t("nav.experience"), href: "#experience" },
  { key: "contact", label: t("nav.contact"), href: "#contact" },
]);

// SVG icons as inline HTML
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mo7amed4522",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>`,
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/mo7amed24",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
          </svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/khaled-mohamed-abdou-318378254/",
    icon: `<svg xmlns="http://www.w3.org2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>`,
  },
  {
    label: "Email",
    href: "mailto:eng.khaled4522@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>`,
  },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;

  // Update active section based on scroll position
  const sections = navItems.value.map((item) => item.href.slice(1));
  const current = sections.find((section) => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom > 100;
    }
    return false;
  });

  if (current) {
    activeSection.value = current;
  }
};

const scrollToSection = (href: string) => {
  const sectionId = href.slice(1);
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  isMobileMenuOpen.value = false;
};

const getSocialLinkClass = (label: string) => {
  const classes = {
    GitHub:
      "hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-800 text-slate-700 dark:text-slate-300 hover:text-white",
    GitLab:
      "hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-700 text-orange-600 dark:text-orange-400 hover:text-white",
    LinkedIn:
      "hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 text-blue-600 dark:text-blue-400 hover:text-white",
    Email:
      "hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 text-red-600 dark:text-red-400 hover:text-white",
  };
  return (
    classes[label as keyof typeof classes] ||
    "hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20"
  );
};

const getSectionIcon = (key: string) => {
  const icons: Record<string, string> = {
    home: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>`,
    projects: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>`,
    skills: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>`,
    experience: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>`,
    contact: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>`,
  };
  return icons[key] || "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  locale.value = currentLang.value;
  document.documentElement.dir = currentLang.value === "ar" ? "rtl" : "ltr";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const changeLang = () => {
  locale.value = currentLang.value;
  setCacheLang(currentLang.value);
  document.documentElement.dir = currentLang.value === "ar" ? "rtl" : "ltr";
};

const setLang = (lang: string) => {
  currentLang.value = lang;
  changeLang();
  isLangMenuOpen.value = false;
};
</script>

<style scoped>
/* Custom animations */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Glass effect */
header {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Gradient text fix */
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Custom shadow for buttons */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Hover effects */
.group:hover .group-hover\:text-blue-500 {
  color: #3b82f6;
}

.dark .group:hover .group-hover\:text-blue-400 {
  color: #60a5fa;
}

/* Scale animation */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Custom border radius */
.rounded-2xl {
  border-radius: 1rem;
}
</style>
