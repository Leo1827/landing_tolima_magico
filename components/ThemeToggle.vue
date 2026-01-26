<template>
  <ClientOnly>
    <button
      @click="toggleTheme"
      class="fixed top-6 right-6 z-50
             w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 shadow-lg transition-all duration-300 hover:scale-105" >
      <!-- SOL -->
      <svg
        v-if="!isDark"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05 5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>

      <!-- LUNA -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-indigo-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
        />
      </svg>
    </button>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const applyTheme = (dark) => {
  document.documentElement.classList.toggle('theme-dark', dark)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme(isDark.value)
}

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  applyTheme(isDark.value)
})
</script>
