<template>
  <section
    id="contact"
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 py-8 sm:py-12"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-10 sm:mb-14">
        <div class="relative inline-block">
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            {{ t("contact.letConnect") }}
          </h1>
          <div
            class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          ></div>
        </div>
        <p
          class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mt-8"
        >
          {{ t("contact.whetherYouHaveAProjectInMind") }}
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Contact Form -->
        <div
          class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
        >
          <!-- Form Header -->
          <div
            class="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-700"
          >
            <div class="flex items-center justify-between">
              <div>
                <h2
                  class="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                >
                  {{ t("contact.sendAMessage") }}
                </h2>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ t("contact.typicallyRespondWithin24Hours") }}
                </p>
              </div>
              <div
                class="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Form Content -->
          <div class="p-6 sm:p-8">
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <!-- Name Field -->
              <div class="group">
                <label
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ t("contact.yourNameHere") }}
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Enter your name"
                    class="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                    :disabled="isSubmitting"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="group">
                <label
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ t("contact.emailAddress") }}
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
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
                  </div>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="your.email@example.com"
                    class="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                    :disabled="isSubmitting"
                  />
                </div>
              </div>

              <!-- Subject Field -->
              <div class="group">
                <label
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ t("contact.subject") }}
                </label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    class="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400"
                    :disabled="isSubmitting"
                  />
                </div>
              </div>

              <!-- Message Field -->
              <div class="group">
                <label
                  class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ t("contact.message") }}
                </label>
                <div class="relative">
                  <div
                    class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none"
                  >
                    <svg
                      class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                  </div>
                  <textarea
                    v-model="formData.message"
                    rows="5"
                    placeholder="Tell me about your project, opportunity, or question..."
                    class="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-blue-400 resize-none"
                    :disabled="isSubmitting"
                  ></textarea>
                </div>
              </div>

              <!-- Form Status -->
              <div
                v-if="submitError"
                class="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl"
              >
                <div class="flex items-center">
                  <svg
                    class="w-5 h-5 text-red-600 dark:text-red-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.714-.833-2.484 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    ></path>
                  </svg>
                  <span class="text-red-600 dark:text-red-400 text-sm">{{
                    submitError
                  }}</span>
                </div>
              </div>

              <div
                v-if="submitSuccess"
                class="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl"
              >
                <div class="flex items-center">
                  <svg
                    class="w-5 h-5 text-green-600 dark:text-green-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span class="text-green-600 dark:text-green-400 text-sm">
                    {{ t("contact.messageSentSuccessfully") }}
                  </span>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 hover:shadow-xl"
              >
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                {{ isSubmitting ? t("contact.sendingMessage") : t("contact.sendMessage") }}
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Information & Quick Actions -->
        <div class="space-y-8">
          <!-- Contact Info Cards -->
          <div
            class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                {{ t("contact.contactInformation") }}
              </h2>
              <div
                class="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                v-for="info in contactInfo"
                :key="info.label"
                class="group p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 rounded-xl hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300 cursor-pointer"
                @click="handleContactClick(info)"
              >
                <div class="flex items-center space-x-3">
                  <div
                    class="p-2 rounded-lg bg-white dark:bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"
                  >
                    <div class="w-5 h-5" v-html="info.icon"></div>
                  </div>
                  <div>
                    <h3
                      class="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1"
                    >
                      {{ info.label }}
                    </h3>
                    <p
                      class="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      {{ info.value }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Instant Messaging -->
          <div
            class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
          >
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-2xl font-bold mb-2">{{ t("contact.instantConnect") }}</h2>
                <p class="text-blue-100 opacity-90">
                  {{ t("contact.connectWithMeInstantly") }}
                </p>
              </div>
              <div class="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/544523695"
                target="_blank"
                rel="noopener noreferrer"
                class="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-green-500 rounded-lg">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">{{ t("contact.whatsApp") }}</h3>
                      <p class="text-sm text-blue-100 opacity-90">
                        {{ t("contact.instantMessaging") }}
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
                <p class="text-sm text-blue-100 opacity-90">
                  {{ t("contact.chatInstantlyForQuickQuestions") }}
                </p>
              </a>

              <!-- Telegram -->
              <a
                href="https://t.me/mo7amed4522"
                target="_blank"
                rel="noopener noreferrer"
                class="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-blue-400 rounded-lg">
                      <svg
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7.85 12c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">{{ t("contact.telegram") }}</h3>
                      <p class="text-sm text-blue-100 opacity-90">
                        {{ t("contact.fastCommunication") }}
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
                <p class="text-sm text-blue-100 opacity-90">
                  {{ t("contact.forDetailedDiscussionsAndFiles") }}
                </p>
              </a>

              <!-- Email -->
              <a
                href="mailto:eng.khaled4522@gmail.com"
                class="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-red-500 rounded-lg">
                      <svg
                        class="w-5 h-5"
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
                    </div>
                    <div>
                      <h3 class="font-bold">{{ t("contact.email") }}</h3>
                      <p class="text-sm text-blue-100 opacity-90">
                        {{ t("contact.formalCommunication") }}
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
                <p class="text-sm text-blue-100 opacity-90">
                  {{ t("contact.forProjectProposalsAndDocuments") }}
                </p>
              </a>

              <!-- Call -->
              <a
                href="tel:+0544523695"
                class="group bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl p-4 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center space-x-3">
                    <div class="p-2 bg-green-400 rounded-lg">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold">{{ t("contact.voiceCall") }}</h3>
                      <p class="text-sm text-blue-100 opacity-90">
                        {{ t("contact.directConversation") }}
                      </p>
                    </div>
                  </div>
                  <svg
                    class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </div>
                <p class="text-sm text-blue-100 opacity-90">
                  {{ t("contact.forImportantDiscussions") }}
                </p>
              </a>
            </div>
          </div>

          <!-- Availability Status -->
          <div
            class="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                {{ t("contact.availabilityStatus") }}
              </h2>
              <div class="relative">
                <div
                  class="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"
                ></div>
                <div class="w-3 h-3 bg-green-500 rounded-full relative"></div>
              </div>
            </div>

            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl"
              >
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p class="font-medium text-slate-900 dark:text-white">
                      {{ t("contact.currentStatus") }}
                    </p>
                    <p class="text-sm text-slate-600 dark:text-slate-400">
                      {{ t("contact.availableForOpportunities") }}
                    </p>
                  </div>
                </div>
                <span
                  class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs font-medium"
                >
                  {{ t("contact.active") }}
                </span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <p class="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {{ t("contact.responseTime") }}
                  </p>
                  <p class="font-bold text-slate-900 dark:text-white">
                    {{ t("contact.hours") }}
                  </p>
                </div>
                <div class="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <p class="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {{ t("contact.timeZone") }}
                  </p>
                  <p class="font-bold text-slate-900 dark:text-white">GMT+4</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  {{ t("contact.preferredCommunication") }}
                </p>
                <div class="flex items-center space-x-2">
                  <span
                    class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                  >
                    {{ t("contact.email") }}
                  </span>
                  <span
                    class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs"
                  >
                    {{ t("contact.whatsApp") }}
                  </span>
                  <span
                    class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs"
                  >
                    {{ t("contact.telegram") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

// Form state
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");
const { t, locale } = useI18n();
// Contact information with inline SVG icons
const contactInfo = [
  {
    label: "Email",
    value: "eng.khaled4522@gmail.com",
    href: "mailto:eng.khaled4522@gmail.com",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>`,
  },
  {
    label: "GitHub",
    value: "@mo7amed4522",
    href: "https://github.com/mo7amed4522",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>`,
  },
  {
    label: "LinkedIn",
    value: "khaled-mohamed",
    href: "https://www.linkedin.com/in/khaled-mohamed-abdou-318378254/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>`,
  },
  {
    label: "Phone",
    value: "+971 54 452 3695",
    href: "tel:+0544523695",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>`,
  },
  {
    label: "Location",
    value: "Dubai, UAE",
    href: "#",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>`,
  },
  {
    label: "GitLab",
    value: "@mo7amed24",
    href: "https://gitlab.com/mo7amed24",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
          </svg>`,
  },
];

// Form validation
const validateForm = () => {
  if (formData.value.name.length < 2) {
    return t("contact.nameMustBeAtLeast2Characters");
  }
  if (!formData.value.email.includes("@")) {
    return t("contact.pleaseEnterAValidEmailAddress");
  }
  if (formData.value.subject.length < 3) {
    return t("contact.subjectMustBeAtLeast3Characters");
  }
  if (formData.value.message.length < 10) {
    return t("contact.messageMustBeAtLeast10Characters");
  }
  return null;
};

// Handle form submission
const handleSubmit = async () => {
  const validationError = validateForm();
  if (validationError) {
    submitError.value = validationError;
    return;
  }

  isSubmitting.value = true;
  submitError.value = "";

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
      }),
    });
    if (!res.ok) {
      throw new Error("Request failed");
    }
    submitSuccess.value = true;
    formData.value = { name: "", email: "", subject: "", message: "" };
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  } catch (error) {
    submitError.value = "Failed to send message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

// Handle contact info click
const handleContactClick = (info: any) => {
  if (info.href && info.href !== "#") {
    window.open(info.href, "_blank");
  }
};

onMounted(() => {
  // Any initialization code if needed
});
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

/* Ping animation for status */
@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Spinner animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Form input focus */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

/* Responsive improvements */
@media (max-width: 640px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}
</style>
