<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const validateForm = () => {
  if (formData.value.name.length < 2) {
    return 'Name must be at least 2 characters'
  }
  if (!formData.value.email.includes('@')) {
    return 'Please enter a valid email address'
  }
  if (formData.value.subject.length < 3) {
    return 'Subject must be at least 3 characters'
  }
  if (formData.value.message.length < 10) {
    return 'Message must be at least 10 characters'
  }
  return null
}

const handleSubmit = async () => {
  const validationError = validateForm()
  if (validationError) {
    submitError.value = validationError
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real implementation, you would send the form data to your backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData.value),
    // })
    
    submitSuccess.value = true
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  } catch (error) {
    submitError.value = 'Failed to send message. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}

const contactInfo = [
  {
    icon: 'Mail',
    label: 'Email',
    value: 'khaled.mohamed@example.com',
    href: 'mailto:khaled.mohamed@example.com',
  },
  {
    icon: 'Github',
    label: 'GitHub',
    value: 'mo7amed4522',
    href: 'https://github.com/mo7amed4522',
  },
  {
    icon: 'Linkedin',
    label: 'LinkedIn',
    value: 'khaled-mohamed',
    href: '#',
  },
  {
    icon: 'Phone',
    label: 'Phone',
    value: '+971 50 123 4567',
    href: 'tel:+971501234567',
  },
  {
    icon: 'MapPin',
    label: 'Location',
    value: 'Dubai, UAE',
    href: '#',
  },
]
</script>

<template>
  <section id="contact" class="py-16 sm:py-20 bg-white dark:bg-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
          Get In Touch
        </h2>
        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology.
          Feel free to reach out!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8">
          <div class="flex items-center space-x-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span>Send Me a Message</span>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Your Name
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="John Doe"
                  class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Your Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="john@example.com"
                  class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Subject
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  placeholder="Project Discussion"
                  class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :disabled="isSubmitting"
                />
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <div class="relative">
                <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                  <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  placeholder="Your message here..."
                  class="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :disabled="isSubmitting"
                ></textarea>
              </div>
            </div>

            <div v-if="submitError" class="text-red-600 dark:text-red-400 text-sm">
              {{ submitError }}
            </div>

            <div v-if="submitSuccess" class="text-green-600 dark:text-green-400 text-sm">
              Message sent successfully! I'll get back to you soon.
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400 disabled:opacity-50"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8">
          <div class="flex items-center space-x-2 text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>Contact Information</span>
          </div>

          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start space-x-4"
            >
              <div class="flex-shrink-0 p-2 bg-slate-200 dark:bg-slate-700 rounded-lg">
                <svg v-if="info.icon === 'Mail'" class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <svg v-else-if="info.icon === 'Github'" class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <svg v-else-if="info.icon === 'Linkedin'" class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <svg v-else-if="info.icon === 'Phone'" class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <svg v-else-if="info.icon === 'MapPin'" class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {{ info.label }}
                </h3>
                <a
                  v-if="info.href.startsWith('http') || info.href.startsWith('mailto') || info.href.startsWith('tel')"
                  :href="info.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-1 block text-base font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {{ info.value }}
                </a>
                <p v-else class="mt-1 block text-base font-medium text-slate-900 dark:text-white">
                  {{ info.value }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>