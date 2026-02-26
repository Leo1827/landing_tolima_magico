<template>
  <section
    id="inicio"
    style="height: 180%;"
    class="relative pt-32 min-h-screen text-white
          [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
  >

    <!-- CARRUSEL DE FONDO -->
    <div class="absolute inset-0 z-0">
      <transition-group name="fade" tag="div" class="w-full h-full">
        <div
          v-for="(img, index) in images"
          v-show="currentImage === index"
          :key="img"
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </transition-group>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-8"
    >

      <!-- TEXTO -->
      <div class="flex-grow rounded-3xl p-6 relative z-10">

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
        <span
          v-if="selected?.tours?.length"
          class="absolute top-6 z-90  bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full shadow"
        >
          {{ selected.tours.length }} experiencias
        </span>

          <!-- MAPA SVG COLOMBIA -->
          <div ref="mapContainer" v-html="tolimaSvg" 
              class="w-full h-full flex justify-center items-center">
          </div>

      </div>

      <!-- INFO REGIÓN -->
      <div class="bg-black/10 backdrop-blur-md rounded-3xl p-6 min-h-[260px] pb-32">
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
                :to="`/paquetes/${tour.slug}`"
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

  const images = [
    '/images/fondo1.jpeg',
    '/images/fondo2.jpeg',
    '/images/fondo3.jpeg'
  ]

  const currentImage = ref(0)
  let interval = null

  onMounted(() => {
    interval = setInterval(() => {
      currentImage.value =
        (currentImage.value + 1) % images.length
    }, 4000) // cambia cada 4 segundos
  })

  onUnmounted(() => {
    clearInterval(interval)
  })

  const municipios = {
    Ibague: {
      nombre: 'Ibagué',
      descripcion:
        'Capital musical de Colombia, rodeada de montañas y naturaleza.',
      tours: [
        {
          name: 'CAÑON DEL COMBEIMA',
          slug: 'canon-del-combeima',
          description:
            'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques'
        },
        {
          name: 'TOCHE',
          slug: 'toche',
          description:
            'Rodeado de bosques andinos, hábitat de la palma de cera árbol nacional de Colombia.'
        },
        {
          name: 'PAN DE AZUCAR',
          slug: 'pan-de-azucar',
          description:
            'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques'
        },
        {
          name: 'CASCADA LA ARAÑA',
          slug: 'cascada-la-arana',
          description:
            'Hermosa cascada natural ideal para caminatas ecológicas cerca de Ibagué.'
        },
        {
          name: 'CASCADA LA MONTAÑA',
          slug: 'cascada-la-montana',
          description:
            'Destino de naturaleza con senderos y vistas panorámicas.'
        },
        {
          name: 'CASCADA LA PLUMA',
          slug: 'cascada-la-pluma',
          description:
            'Cascada rodeada de vegetación ideal para turismo de aventura.'
        },
        {
          name: 'FINCA CIELO LINDO',
          slug: 'finca-cielo-lindo',
          description:
            'Experiencia campestre con paisajes naturales y descanso rural.'
        },
        {
          name: 'MUNDO SONORO',
          slug: 'mundo-sonoro',
          description:
            'Espacio cultural y musical representativo de Ibagué.'
        },
        {
          name: 'TERMALES EL RANCHO',
          slug: 'termales-el-rancho',
          description:
            'Aguas termales naturales ideales para relajación y bienestar.'
        }
      ]
    },

    Alvarado: {
      nombre: 'Alvarado',
      descripcion:
        'Municipio del Tolima reconocido por su tradición agrícola, paisajes cálidos y cercanía a importantes rutas turísticas del departamento.',
      tours: [
        {
          name: 'CASCADA LA CAIMA',
          slug: 'cascada-la-caima',
          description:
            'La Cascada La Caima, ubicada en Alvarado (Tolima), es un destino natural rodeado de vegetación y aguas cristalinas'
        }
      ]
    },

    Anzoategui: {
      nombre: 'Anzoategui',
      descripcion:
        'Palomar, en Anzoátegui (Tolima), es un destino rural rodeado de montañas y naturaleza, ideal para quienes buscan tranquilidad y experiencias de turismo ecológico.',
      tours: [
        {
          name: 'PALOMAR',
          slug: 'palomar',
          description:
            'Corregimiento montañoso de Anzoátegui, perfecto para turismo de naturaleza y descanso rural.'
        }
      ]
    }
    
  }

  const { hovered, selected } = useTolimaMap(mapContainer, municipios)

</script>

<style scoped>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1.5s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }

  .fondoImg {
    /* Mantener gradiente como fondo */
    background: linear-gradient(to bottom right, #6D1B2D, #8a3a2b, #D4AF37);
    position: relative;
    overflow: hidden;
  }


  /* Imagen de fondo */
  .fondoImg::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/fondo1.jpeg'); /* <-- reemplaza con tu imagen */
    background-size: cover;
    background-position: center;
    z-index: 0;
    opacity: 0.4; /* controla cuánto se oscurece */
  }

  /* Todo el contenido por encima de la imagen */
  .fondoImg > div {
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

