<template>
  <section
    id="inicio"
    class="pt-32 min-h-screen bg-gradient-to-br from-[#6D1B2D] via-[#8a3a2b] to-[#D4AF37] text-white"
  >
    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-8"
    >

      <!-- TEXTO -->
      <div class="flex-grow backdrop-blur-md p-6">
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
        class="relative rounded-3xl p-6
              flex justify-center items-center min-h-[520px]"
      >
        <div
          v-if="selected?.tours?.length"
          class="absolute top-6 z-90 ml-16 left-0 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full shadow"
        >
          {{ selected.tours.length }} experiencias
        </div>

          <!-- MAPA SVG COLOMBIA -->
          <div ref="mapContainer" v-html="tolimaSvg" 
              class="w-full h-full flex justify-center items-center">
          </div>

      </div>

      <!-- INFO REGIÓN -->
      <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 min-h-[260px]">
        <h3 class="text-2xl font-extrabold text-[#D4AF37]">
          {{ selected?.nombre || 'Seleccione un municipio' }}
        </h3>

        <p class="text-white/80 text-sm mt-2">
          {{ selected?.descripcion || 'Haz clic en un municipio para ver detalles.' }}
        </p>

        <!-- PLANES -->
        <div v-if="selected?.tours" class="mt-5">
          <h4 class="text-sm uppercase tracking-wide text-white/70 mb-3">
            Planes disponibles
          </h4>

          <ul class="space-y-3">
            <li
              v-for="tour in selected.tours"
              :key="tour.slug"
              class="flex items-start gap-3"
            >
              <span class="text-[#D4AF37]">|</span>
              <NuxtLink
                :to="`/tours/${tour.slug}`"
                class="hover:text-[#D4AF37] transition"
              >
                <strong>{{ tour.name }}</strong>
                <p class="text-xs text-white/70">
                  {{ tour.description }}
                </p>
              </NuxtLink>
            </li>
          </ul>
        </div>
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
          name: 'CAÑON DEL COMBEIMA',
          slug: 'canon-del-combeima',
          description: 'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques'
        },
        {
          name: 'TOCHE',
          slug: 'toche',
          description: 'Rodeado de bosques andinos, hábitat de la palma de cera árbol nacional de Colombia. '
        },
      ]
    },
    
  }

  const { hovered, selected } = useTolimaMap(mapContainer, municipios)

</script>

<style scoped>

  #inicio {
    /* Mantener gradiente como fondo */
    background: linear-gradient(to bottom right, #6D1B2D, #8a3a2b, #D4AF37);
    position: relative;
    overflow: hidden;
  }

  /* Imagen de fondo */
  #inicio::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/fondo.jpg'); /* <-- reemplaza con tu imagen */
    background-size: cover;
    background-position: center;
    z-index: 0;
    opacity: 0.4; /* controla cuánto se oscurece */
  }

  /* Todo el contenido por encima de la imagen */
  #inicio > div {
    position: relative;
    z-index: 10;
  }


  :deep(svg) {
    width: 100%;
    height: 500px;
    transition: transform 0.6s ease;
  }

  :deep(svg.zoomed) {
    transform: scale(1.15);
  }

  /* Estado normal */
  :deep(svg path) {
    fill: rgba(212, 175, 55, 0.6);
    stroke: #000;
    stroke-width: 1;
    cursor: pointer;
    transition: transform 0.3s ease, fill 0.3s ease;
    transform-origin: center;
    transform-box: fill-box;
  }

  /* Hover → zoom SOLO al municipio */
  :deep(svg path.hovered) {
    fill: #6D1B2D;
    transform: scale(1.2);
  }

  /* Seleccionado → zoom persistente */
  :deep(svg path.selected) {
    fill: #6D1B2D;
    transform: scale(1.20);
    z-index: 10;
  }

</style>

