<template>
  <section
    id="inicio"
    class="pt-32 min-h-screen bg-gradient-to-br from-[#6D1B2D] via-[#8a3a2b] to-[#D4AF37] text-white"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
    >

      <!-- TEXTO -->
      <div>
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Descubre la magia del
          <span class="text-[#D4AF37]">Tolima</span>
        </h1>

        <p class="mt-6 text-lg text-white/90">
          Explora cada región del departamento del Tolima: naturaleza,
          cultura, gastronomía y experiencias auténticas.
        </p>

      </div>

      <!-- MAPA TOLIMA REAL -->
      <!-- IMAGEN DEPARTAMENTO DEL TOLIMA -->
      <div
        class="relative bg-white/10 backdrop-blur-md rounded-3xl p-6
              flex justify-center items-center min-h-[520px]"
      >
        <img
          src="/images/tolima.png"
          alt="Mapa del departamento del Tolima, Colombia"
          class="w-[650px] h-[550px] max-w-sm lg:max-w-md object-contain
                drop-shadow-2xl hover:scale-105 transition duration-300"
        />

        <span class="absolute bottom-4 text-xs text-white/70">
          Departamento del Tolima · Colombia
        </span>
      </div>

      <!-- INFO REGIÓN -->
      <div
        class="bg-white/10 backdrop-blur-md rounded-3xl p-6 min-h-[260px]"
      >
        <h3 class="text-xl font-bold text-[#D4AF37] mb-2">
          {{ activeRegion.name }}
        </h3>

        <p class="text-white/90 text-sm leading-relaxed">
          {{ activeRegion.description }}
        </p>

        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="item in activeRegion.places" :key="item">
            • {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TolimaMap from '~/components/TolimaMap.vue'

const municipios = {
  Ibagué: {
    name: 'Ibagué',
    description: 'Capital musical de Colombia y puerta de entrada al Tolima.',
    places: ['Cañón del Combeima', 'Conservatorio', 'Centro histórico']
  },
  Honda: {
    name: 'Honda',
    description: 'Ciudad histórica a orillas del río Magdalena.',
    places: ['Puente Navarro', 'Centro colonial']
  }
}

const activeRegion = ref({
  name: 'Selecciona un municipio',
  description: 'Haz clic en un municipio del mapa para ver su información.',
  places: []
})

const onMunicipioSelect = (nombre) => {
  activeRegion.value =
    municipios[nombre] || {
      name: nombre,
      description: 'Información turística próximamente.',
      places: []
    }
}

</script>
