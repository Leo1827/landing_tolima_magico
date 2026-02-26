<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <h1 class="text-4xl font-bold text-[#6D1B2D] mb-10">
      Nuestros Paquetes
    </h1>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <NuxtLink
        v-for="paquete in paquetes"
        :key="paquete.slug"
        :to="`/paquetes/${paquete.slug}`"
        class="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
      >
        <!-- Imagen -->
        <img
          :src="paquete.imagen"
          :alt="paquete.nombre"
          class="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        <!-- Glass card inferior -->
        <div class="absolute bottom-3 left-3 right-3">
          <div class="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <h2 class="text-sm font-bold text-gray-900 leading-tight">
              {{ paquete.nombre }}
            </h2>

            <p class="text-xs text-gray-600 mt-1 line-clamp-2">
              {{ paquete.description }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const paquetes = [
  // ibague
  {
    nombre: 'CAÑON DEL COMBEIMA',
    slug: 'canon-del-combeima',
    description:
      'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques',
    imagen: 'https://images.pexels.com/photos/545960/pexels-photo-545960.jpeg'
  },
  {
    nombre: 'TOCHE',
    slug: 'toche',
    description:
      'Rodeado de bosques andinos, hábitat de la palma de cera árbol nacional de Colombia.',
    imagen: '/images/paquetes/toche.jpg'
  },
  {
    nombre: 'PAN DE AZUCAR',
    slug: 'pan-de-azucar',
    description:
      'Destino de montaña ideal para senderismo y aventura en el Tolima.',
    imagen: '/images/paquetes/pan-azucar.jpg'
  },
  {
    nombre: 'CASCADA LA ARAÑA',
    slug: 'cascada-la-arana',
    description:
      'Hermosa cascada natural ideal para caminatas ecológicas cerca de Ibagué.',
    imagen: '/images/paquetes/cascada-arana.jpg'
  },
  {
    nombre: 'CASCADA LA MONTAÑA',
    slug: 'cascada-la-montana',
    description:
      'Destino de naturaleza con senderos y vistas panorámicas.',
    imagen: '/images/paquetes/cascada-montana.jpg'
  },
  {
    nombre: 'CASCADA LA PLUMA',
    slug: 'cascada-la-pluma',
    description:
      'Cascada rodeada de vegetación ideal para turismo de aventura.',
    imagen: '/images/paquetes/cascada-pluma.jpg'
  },
  {
    nombre: 'FINCA CIELO LINDO',
    slug: 'finca-cielo-lindo',
    description:
      'Experiencia campestre con paisajes naturales y descanso rural.',
    imagen: '/images/paquetes/cielo-lindo.jpg'
  },
  {
    nombre: 'MUNDO SONORO',
    slug: 'mundo-sonoro',
    description:
      'Espacio cultural y musical representativo de Ibagué.',
    imagen: '/images/paquetes/mundo-sonoro.jpg'
  },
  {
    nombre: 'TERMALES EL RANCHO',
    slug: 'termales-el-rancho',
    description:
      'Aguas termales naturales ideales para relajación y bienestar.',
    imagen: '/images/paquetes/termales-rancho.jpg'
  },

  // alvarado
  {
    nombre: 'CASCADA LA CAIMA',
    slug: 'cascada-la-caima',
    description:
      'La Cascada La Caima, ubicada en Alvarado (Tolima), es un destino natural rodeado de vegetación y aguas cristalinas',
    imagen: '/images/paquetes/termales-rancho.jpg'
  },

  // anzoategui
  {
    nombre: 'PALOMAR',
    slug: 'palomar',
    description:
      'Corregimiento montañoso de Anzoátegui, perfecto para turismo de naturaleza y descanso rural.',
    imagen: '/images/paquetes/termales-rancho.jpg'
  }
]
</script>
