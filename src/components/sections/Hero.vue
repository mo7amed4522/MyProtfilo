<template>
  <section
    id="home"
    class="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20"
  >
    <!-- Animated Background Particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        v-for="i in 30"
        :key="i"
        class="absolute rounded-full opacity-10"
        :class="getParticleColor(i)"
        :style="getParticleStyle(i)"
      />
    </div>

    <!-- Decorative Elements -->
    <div class="absolute inset-0">
      <!-- Large Blur Circles -->
      <div
        class="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-3xl"
      />
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-700/20 rounded-full blur-3xl"
      />

      <!-- Floating Tech Icons -->
      <div class="absolute top-1/4 left-1/4 animate-float-1">
        <div
          class="w-12 h-12 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </div>
      </div>

      <div class="absolute top-1/3 right-1/4 animate-float-2">
        <div
          class="w-12 h-12 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
      </div>

      <div class="absolute bottom-1/3 left-1/3 animate-float-3">
        <div
          class="w-12 h-12 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center"
        >
          <svg
            class="w-6 h-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Text Content -->
        <div class="space-y-8">
          <!-- Welcome Badge -->
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full"
          >
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span class="text-sm font-medium text-slate-700 dark:text-slate-300"
              >{{ t("hero.availableForOpportunities") }}</span
            >
          </div>

          <!-- Main Title -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span class="block text-slate-900 dark:text-white"
              >{{ t("hero.buildingThe") }}</span
            >
            <span
              class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              {{ t("hero.futureOfTech") }}
            </span>
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl"
          >
            {{ t("hero.backendMobileEngineer") }}
            <span class="font-semibold text-blue-600 dark:text-blue-400"
              >Go</span
            >,
            <span class="font-semibold text-green-600 dark:text-green-400"
              >{{ t("hero.Flutter") }}</span
            >, {{ t("hero.and") }}
            <span class="font-semibold text-purple-600 dark:text-purple-400"
              >{{ t("hero.CloudTechnologies") }}</span
            >
          </p>

          <!-- Description -->
          <p
            class="text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl"
          >
            {{ t("hero.description") }}
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400"
              >
                3+
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("hero.yearsExperience") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400"
              >
                50+
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("hero.projects") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400"
              >
                100%
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("hero.satisfaction") }}
              </div>
            </div>
            <div class="text-center">
              <div
                class="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400"
              >
                {{ t("hero.uae") }}
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">
                {{ t("hero.basedIn") }}
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <button
              class="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              @click="scrollToProjects"
            >
              <svg
                class="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
              {{ t("hero.viewProjects") }}
              <svg
                class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>

            <button
              class="group inline-flex items-center px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white/20 dark:hover:bg-white/10 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1"
              @click="scrollToContact"
            >
              <svg
                class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              {{ t("hero.getInTouch") }}
            </button>

            <button
              class="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 text-white rounded-xl hover:from-slate-800 hover:to-slate-900 dark:hover:from-slate-900 dark:hover:to-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              @click="downloadResume"
            >
              <svg
                class="w-5 h-5 mr-2 group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              {{ t("hero.downloadCV") }}
            </button>
          </div>

          <!-- Social Links -->
          <div class="flex items-center space-x-4 pt-4">
            <p class="text-sm text-slate-500 dark:text-slate-400">
              {{ t("hero.connectWithMe") }}:
            </p>
            <div class="flex space-x-3">
              <a
                href="https://github.com/mo7amed4522"
                target="_blank"
                class="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/khaled-mohamed-abdou-318378254/"
                target="_blank"
                class="p-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Profile & Tech Stack -->
        <div class="relative">
          <!-- Profile Card -->
          <div class="relative">
            <!-- Main Profile Image/Icon -->
            <div
              class="relative mx-auto lg:mx-0 lg:ml-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <!-- Outer Glow -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"
              />

              <!-- Profile Circle -->
              <div
                class="relative w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center overflow-hidden shadow-2xl"
              >
                <!-- Animated rings -->
                <div
                  class="absolute w-32 h-32 border-2 border-white/30 rounded-full animate-spin-slow"
                  style="animation-duration: 20s"
                />
                <div
                  class="absolute w-48 h-48 border-2 border-white/20 rounded-full animate-spin-reverse"
                  style="animation-duration: 25s"
                />

                <!-- Initials -->
                <div class="relative z-10">
                  <div
                    class="text-white text-6xl sm:text-7xl lg:text-8xl font-bold"
                  >
                    KM
                  </div>
                  <div
                    class="text-white/80 text-center mt-4 text-sm sm:text-base font-medium"
                  >
                    {{ t("hero.backendMobileEngineer") }}
                  </div>
                </div>
              </div>

              <!-- Status Indicator -->
              <div class="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
                <div
                  class="flex items-center space-x-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-full shadow-lg"
                >
                  <div
                    class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  />
                  <span
                    class="text-xs font-medium text-slate-700 dark:text-slate-300"
                    >{{ t("hero.currentlyatHeraSawda") }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Floating Tech Badges -->
            <div class="absolute -top-4 -left-4 animate-float-2">
              <div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg">
                <svg
                  class="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="absolute -top-4 -right-4 animate-float-3">
              <div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg">
                <svg
                  class="w-6 h-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 animate-float-1">
              <div class="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg">
                <svg
                  class="w-6 h-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Tech Stack Bar -->
          <div
            class="mt-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {{ t("hero.techStack") }}
            </h3>
            <div class="grid grid-cols-3 gap-3">
              <div
                class="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg"
              >
                <div class="text-blue-600 dark:text-blue-400 font-bold text-sm">
                  Go
                </div>
              </div>
              <div
                class="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg"
              >
                <div
                  class="text-green-600 dark:text-green-400 font-bold text-sm"
                >
                  Flutter
                </div>
              </div>
              <div
                class="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg"
              >
                <div
                  class="text-purple-600 dark:text-purple-400 font-bold text-sm"
                >
                  Docker
                </div>
              </div>
              <div
                class="text-center p-3 bg-pink-50 dark:bg-pink-900/30 rounded-lg"
              >
                <div class="text-pink-600 dark:text-pink-400 font-bold text-sm">
                  AWS
                </div>
              </div>
              <div
                class="text-center p-3 bg-orange-50 dark:bg-orange-900/30 rounded-lg"
              >
                <div
                  class="text-orange-600 dark:text-orange-400 font-bold text-sm"
                >
                  K8s
                </div>
              </div>
              <div
                class="text-center p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg"
              >
                <div
                  class="text-indigo-600 dark:text-indigo-400 font-bold text-sm"
                >
                  Postgres
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <button
        class="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        @click="scrollToAbout"
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

// Animation states
const animatedParticles = ref(false);
const { t } = useI18n();

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToProjects = () => {
  const element = document.getElementById("projects");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToAbout = () => {
  const element =
    document.getElementById("about") || document.getElementById("skills");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const downloadResume = () => {
  console.log(t("hero.downloadingResume"));

  // Direct download link from Google Drive
  const fileId = "1W4TL5lk4iNEVq67W3FMTFfqJFrwxw3Ck";
  const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  // Create a temporary anchor element to trigger download
  const link = document.createElement("a");
  link.href = directDownloadLink;
  link.setAttribute("download", "CV.pdf"); // Custom filename
  link.setAttribute("target", "_blank"); // Open in new tab
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log(t("hero.resumeDownloadInitiated"));
};

// Generate particle styles
const getParticleColor = (index: number) => {
  const colors = [
    "bg-blue-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-indigo-400",
  ];
  return colors[index % colors.length];
};

const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 1;
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;
  const x = Math.random() * 100;
  const y = Math.random() * 100;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animation: `float ${duration}s infinite ${delay}s`,
    animationTimingFunction: "ease-in-out",
  };
};

onMounted(() => {
  setTimeout(() => {
    animatedParticles.value = true;
  }, 500);
});
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float-1 {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(-10px);
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(15px);
  }
}

@keyframes float-3 {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(10px) translateX(-20px);
  }
}

.animate-float-1 {
  animation: float-1 6s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 8s ease-in-out infinite;
}

.animate-float-3 {
  animation: float-3 7s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse linear infinite;
}

/* Glass morphism effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Dark mode scrollbar */
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-track {
    background: #374151;
  }

  ::-webkit-scrollbar-thumb {
    background: #6b7280;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }
}

/* Gradient text animation */
.gradient-text-animate {
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
  background-size: 300% 300%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Hover effects */
.hover-lift {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
</style>
