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
        class="relative backdrop-blur-md rounded-3xl p-6
              flex justify-center items-center min-h-[520px]"
      >
          <!-- MAPA SVG COLOMBIA -->
          <div ref="mapContainer" v-html="tolimaSvg" 
              class="w-full h-full flex justify-center items-center">
          </div>

        <span class="absolute bottom-4 text-xs text-white/70">
          Departamento del Tolima · Colombia
        </span>
      </div>

      <!-- INFO REGIÓN -->
      <div
        class="bg-white/10 backdrop-blur-md rounded-3xl p-6 min-h-[260px]"
      >
        <h3 class="text-xl font-bold text-[#D4AF37] mb-2">
          {{ selected?.nombre || hovered?.nombre || 'Seleccione un municipio' }}
        </h3>

        <p class="text-white/90 text-sm leading-relaxed">
          {{ selected?.descripcion || 'Haz clic en un municipio para ver detalles.' }}
        </p>

        <ul v-if="selected?.tours" class="mt-4 space-y-2 text-sm">
          <li
            v-for="tour in selected.tours"
            :key="tour.slug"
          >
            <NuxtLink
              :to="`/tours/${tour.slug}`"
              class="text-[#D4AF37] hover:underline hover:text-white transition"
            >
              → {{ tour.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue'
  import tolimaSvg from '~/public/images/maptolima.svg?raw'
  import { useTolimaMap } from '~/composables/useTolimaMap'

  const mapContainer = ref(null)

  const municipios = {
    Ibague: {
      nombre: 'Ibagué',
      descripcion: 'Capital musical de Colombia, rodeada de montañas y naturaleza.',
      tours: [
        {
          name: 'Cañón del Combeima',
          slug: 'canon-del-combeima'
        },
        {
          name: 'Jardín Botánico San Jorge',
          slug: 'jardin-botanico-san-jorge'
        }
      ]
    },
    Melgar: {
      nombre: 'Melgar',
      descripcion: 'Destino turístico por excelencia, clima cálido.',
      tours: [
        {
          name: 'Parques acuáticos',
          slug: 'parques-acuaticos-melgar'
        }
      ]
    },
    Suarez: {
      nombre: 'Suárez',
      descripcion: 'Destino turístico por excelencia, clima cálido y frio.',
      tours: [
        {
          name: 'Parques acuáticos',
          slug: 'parques-acuaticos-suarez'
        }
      ]
    },
    Venadillo: {
      nombre: 'Venadillo',
      descripcion: 'Destino turístico por excelencia, clima cálido.',
      tours: [
        {
          name: 'Parques acuáticos',
          slug: 'parques-acuaticos-venadillo'
        }
      ]
    }
  }

  const { hovered, selected } = useTolimaMap(mapContainer, municipios)

</script>


<style scoped>
  :deep(svg) {
    width: 100%;
    height: 500px;
    transition: transform 0.6s ease;
  }

  :deep(svg.zoomed) {
    transform: scale(1.15);
  }

  :deep(svg path) {
    fill: rgba(212, 175, 55, 0.6);
    stroke: #000;
    stroke-width: 1;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  :deep(svg path:hover) {
    fill: #6D1B2D;
  }

  :deep(svg path.selected) {
    fill: #6D1B2D;
  }

</style>

