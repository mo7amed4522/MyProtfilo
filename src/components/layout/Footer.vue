<template>
  <footer
    class="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30 text-white pt-12 sm:pt-16"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      ></div>

      <!-- Grid Pattern -->
      <div
        class="absolute inset-0 opacity-5"
        style="
          background-image:
            linear-gradient(to right, #888 1px, transparent 1px),
            linear-gradient(to bottom, #888 1px, transparent 1px);
          background-size: 50px 50px;
        "
      ></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-12">
        <!-- Left Column: Brand & Social -->
        <div>
          <!-- Brand -->
          <div class="flex items-center space-x-3 mb-6">
            <div class="relative">
              <div
                class="relative z-10 w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
              >
                <span class="text-white text-xl font-bold tracking-tight"
                  >KM</span
                >
              </div>
              <div class="absolute inset-0 rounded-2xl animate-spin-slow">
                <div
                  class="absolute inset-0 border-2 border-transparent border-t-blue-400 border-r-purple-400 rounded-2xl"
                ></div>
              </div>
            </div>
            <div>
              <h2
                class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {{ t("header.khaledMohamed") }}
              </h2>
              <p
                class="text-sm text-slate-400 font-medium uppercase tracking-wide"
              >
                {{ t("header.backendMobileEngineer") }}
              </p>
            </div>
          </div>

          <!-- Description -->
          <p class="text-slate-300 mb-8 leading-relaxed max-w-lg">
            {{ t("header.passionateAbout") }}
          </p>

          <!-- Social Links -->
          <div class="mb-8">
            <p class="text-sm font-medium text-slate-400 mb-4">
              {{ t("header.connectWithMe") }}
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="[
                  'group relative p-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1',
                  getSocialLinkClass(link.label),
                ]"
                :aria-label="link.label"
                :title="link.label"
              >
                <div class="w-5 h-5" v-html="link.icon"></div>
                <!-- Tooltip -->
                <div
                  class="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {{ link.label }}
                </div>
              </a>
            </div>
          </div>

          <!-- Newsletter Signup -->
          <div
            class="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6"
          >
            <h3 class="text-lg font-bold text-white mb-3">
              {{ t("header.stayUpdated") }}
            </h3>
            <p class="text-sm text-slate-300 mb-4">
              {{ t("header.getNotified") }}
            </p>
            <form class="space-y-3" @submit.prevent="subscribeNewsletter">
              <div class="flex gap-2">
                <input
                  v-model="email"
                  type="email"
                  :placeholder="t('header.emailPlaceholder')"
                  class="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  class="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  {{ t("header.subscribe") }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Right Column: Links Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-bold mb-4 flex items-center">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {{ t("header.navigation") }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in footerLinks[0].links" :key="link.label">
                <a
                  :href="link.href"
                  class="group flex items-center text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <span
                    class="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  {{ link.label }}
                  <svg
                    class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Technologies -->
          <div>
            <h3 class="text-lg font-bold mb-4 flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {{ t("header.techStack") }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in footerLinks[1].links" :key="link.label">
                <a
                  :href="link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center text-slate-300 hover:text-white transition-colors duration-300"
                >
                  <span
                    class="w-1 h-1 bg-green-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  ></span>
                  {{ link.label }}
                  <svg
                    class="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact & Resources -->
          <div>
            <h3 class="text-lg font-bold mb-4 flex items-center">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {{ t("header.connect") }}
            </h3>
            <div class="space-y-4">
              <!-- Contact Info -->
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <div class="w-5 h-5 text-blue-400 mt-0.5">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-400">{{ t("header.email") }}</p>
                    <a
                      href="mailto:eng.khaled4522@gmail.com"
                      class="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      eng.khaled4522@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start space-x-3">
                  <div class="w-5 h-5 text-green-400 mt-0.5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-slate-400">{{ t("header.location") }}</p>
                    <p class="text-slate-300">{{ t("header.dubai") }}</p>
                  </div>
                </div>
              </div>

              <!-- Resources -->
              <div class="pt-4 border-t border-slate-700">
                <h4 class="text-sm font-medium text-slate-400 mb-3">
                  {{ t("header.resources") }}
                </h4>
                <ul class="space-y-2">
                  <li v-for="link in footerLinks[2].links" :key="link.label">
                    <a
                      :href="link.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center text-slate-300 hover:text-white transition-colors text-sm"
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                      {{ link.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-slate-700 pt-8 pb-6">
        <div
          class="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <!-- Copyright & Info -->
          <div
            class="flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm"
          >
            <div class="flex items-center space-x-2">
              <span>© {{ currentYear }} {{ t("header.khaledMohamed") }}</span>
              <span class="hidden sm:inline">•</span>
              <span class="hidden sm:inline">{{ t("header.allRightsReserved") }}</span>
            </div>

            <div class="flex items-center space-x-2">
              <span>{{ t("header.builtWith") }}</span>
              <div class="relative">
                <div
                  class="absolute inset-0 bg-red-500 rounded-full blur"
                ></div>
                <svg
                  class="w-4 h-4 text-red-500 relative animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
              <span>{{ t("header.and") }}</span>
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 text-green-500 mr-1"
                  viewBox="0 0 261.76 226.69"
                >
                  <path
                    fill="#41b883"
                    d="M161.096.001l-30.224 52.35L100.647.001H-.005l130.877 226.688L261.749.001z"
                  />
                  <path
                    fill="#34495e"
                    d="M161.096.001l-30.224 52.35L100.647.001H52.346l78.526 136.01L209.398.001z"
                  />
                </svg>
                <span>Vue.js</span>
              </div>
            </div>
          </div>

          <!-- Back to Top & Legal -->
          <div class="flex items-center space-x-6">
            <!-- Legal Links -->
            <div class="flex items-center space-x-4 text-sm">
              <a
                href="#"
                class="text-slate-400 hover:text-white transition-colors"
                >{{ t("header.privacyPolicy") }}</a
              >
              <span class="text-slate-600">•</span>
              <a
                href="#"
                class="text-slate-400 hover:text-white transition-colors"
                >{{ t("header.termsOfService") }}</a
              >
              <span class="text-slate-600">•</span>
              <a
                href="#"
                class="text-slate-400 hover:text-white transition-colors"
                >{{ t("header.cookies") }}</a
              >
            </div>

            <!-- Back to Top -->
            <button
              class="group flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="Back to top"
              @click="scrollToTop"
            >
              <svg
                class="w-5 h-5 transform group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
              <span class="text-sm">{{ t("header.backToTop") }}</span>
            </button>
          </div>
        </div>

        <!-- Version & Status -->
        <div
          class="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500"
        >
          <div class="flex items-center space-x-3 mb-3 sm:mb-0">
            <div class="flex items-center space-x-1">
              <div
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              ></div>
              <span>{{ t("header.status") }}</span>
            </div>
            <span>•</span>
            <span>{{ t("header.version") }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <span>{{ t("header.lastUpdated") }} {{ lastUpdated }}</span>
            <span>•</span>
            <span>{{ t("header.madeInUAE") }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";


const { t, locale } = useI18n();
const currentYear = ref(new Date().getFullYear());
const lastUpdated = computed(() => {
  const date = new Date();
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
});

const email = ref("");

// Social links with inline SVG icons
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>`,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/544523695",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
          </svg>`,
  },
  {
    label: "Telegram",
    href: "https://t.me/mo7amed4522",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
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

const footerLinks = [
  {
    title: t("footer.quickLinks"),
    links: [
      { label: t("nav.home"), href: "#home" },
      { label: t("nav.projects"), href: "#projects" },
      { label: t("nav.skills"), href: "#skills" },
      { label: t("nav.experience"), href: "#experience" },
      { label: t("nav.contact"), href: "#contact" },
    ],
  },
  {
    title: t("footer.technologies"),
    links: [
      { label: "Go", href: "https://golang.org" },
      { label: "Flutter", href: "https://flutter.dev" },
      { label: "TypeScript", href: "https://www.typescriptlang.org" },
      { label: "Next.js", href: "https://nextjs.org" },
      { label: "AWS", href: "https://aws.amazon.com" },
    ],
  },
  {
    title: t("footer.resources"),
    links: [
      {
        label: t("footer.resume"),
        href: "https://drive.google.com/file/d/1W4TL5lk4iNEVq67W3FMTFfqJFrwxw3Ck/view?usp=drive_link",
      },
      { label: t("footer.github"), href: "https://github.com/mo7amed4522" },
      { label: t("footer.gitlab"), href: "https://gitlab.com/mo7amed24" },
      { label: t("footer.email"), href: "mailto:eng.khaled4522@gmail.com" },
    ],
  },
];

const getSocialLinkClass = (label: string) => {
  const classes = {
    GitHub:
      "bg-slate-800/50 hover:bg-slate-700 text-slate-300 hover:text-white",
    GitLab:
      "bg-orange-900/30 hover:bg-orange-800/50 text-orange-300 hover:text-orange-100",
    LinkedIn:
      "bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 hover:text-blue-100",
    WhatsApp:
      "bg-green-900/30 hover:bg-green-800/50 text-green-300 hover:text-green-100",
    Telegram:
      "bg-blue-700/30 hover:bg-blue-600/50 text-blue-300 hover:text-blue-100",
    Email: "bg-red-900/30 hover:bg-red-800/50 text-red-300 hover:text-red-100",
  };
  return (
    classes[label as keyof typeof classes] ||
    "bg-slate-800/50 hover:bg-slate-700"
  );
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const subscribeNewsletter = () => {
  if (email.value && email.value.includes("@")) {
    alert(t("footer.thankYou", { email: email.value }));
    email.value = "";
  }
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
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Gradient text */
.gradient-text {
  background-clip: text;
  -webkit-background-clip: text;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Shadow utilities */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Hover effects */
.hover\:-translate-y-1:hover {
  transform: translateY(-4px);
}

/* Ping animation for status */
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-pulse {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Selection styling */
::selection {
  background-color: rgba(59, 130, 246, 0.3);
  color: white;
}

/* Focus styles */
button:focus,
a:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}
</style>
