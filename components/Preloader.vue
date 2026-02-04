<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-[#6D1B2D] via-[#8a3a2b] to-[#D4AF37] text-white"
  >
    <!-- Animación estrella -->
    <div class="animate-bounce mb-4">
      <span class="text-4xl text-[#D4AF37]">★</span>
    </div>

    <!-- Texto amigable -->
    <p class="text-lg font-semibold mb-4">Cargando La magia del Tolima...</p>

    <!-- Barra de progreso -->
    <div class="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
      <div
        class="h-full bg-[#D4AF37] rounded-full transition-all duration-500"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)
const progress = ref(0)

onMounted(() => {
  // Simula carga progresiva
  let interval = setInterval(() => {
    progress.value += Math.random() * 10
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      setTimeout(() => (show.value = false), 300) // espera un poco antes de ocultar
    }
  }, 300)
})
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>
