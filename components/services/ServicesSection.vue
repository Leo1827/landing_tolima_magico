<template>
  <section class="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
    <!-- Título -->
    <h2
      class="relative z-10 my-14 text-3xl md:text-5xl font-extrabold tracking-tight text-center" >
      Servicios
    </h2>

    <!-- MENU -->
    <div
      class="flex gap-3 sm:gap-4 mb-12 sm:mb-14
             overflow-x-auto flex-nowrap
             justify-start sm:justify-center
             rounded-xl p-2
             shadow-[0_10px_30px_rgba(0,0,0,0.08)]
             scrollbar-hide"
    >
      <button
        v-for="item in menu"
        :key="item.key"
        @click="active = item.key"
        :class="[
          'shrink-0 rounded-lg font-medium text-center transition-all',
          'px-4 py-2.5 sm:px-6 sm:py-3 text-sm',
          item.width,
          active === item.key
            ? 'bg-gray-900 text-white shadow-md scale-[1.03]'
            : 'text-gray-400 hover:text-black'
        ]"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- CONTENIDO -->
    <div
      class="relative rounded-2xl p-6 sm:p-10
             shadow-[0_20px_50px_rgba(0,0,0,0.08)]
             transition-all"
    >
      <Transition name="fade-slide" mode="out-in">
        <component :is="currentComponent" :key="active" />
      </Transition>
    </div>
  </section>
</template>


<script setup>
import { computed, ref } from 'vue'

import IllustrationService from './IllustrationService.vue'
import ComputerService from './ComputerService.vue'
import OfficeService from './OfficeService.vue'

const active = ref('illustration')

const menu = [
  {
    key: 'illustration',
    label: 'Digital Illustration',
    width: 'w-28 sm:w-52 md:w-56',
  },
  {
    key: 'computer',
    label: 'Computer Maintenance',
    width: 'w-28 sm:w-56 md:w-60',
  },
  {
    key: 'office',
    label: 'Office & PowerPoint',
    width: 'w-28 sm:w-48 md:w-52',
  },
]


const currentComponent = computed(() => {
  switch (active.value) {
    case 'computer':
      return ComputerService
    case 'office':
      return OfficeService
    default:
      return IllustrationService
  }
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
