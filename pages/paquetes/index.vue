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
          class="h-[32rem] md:h-100 w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques',
    imagen: 'images/rancho.jpg'
  },
  {
    nombre: 'TOCHE',
    slug: 'toche',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Rodeado de bosques andinos, hábitat de la palma de cera árbol nacional de Colombia.',
    imagen: '/images/toche.jpg'
  },
  {
    nombre: 'PAN DE AZUCAR',
    slug: 'pan-de-azucar',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Destino de montaña ideal para senderismo y aventura en el Tolima.',
    imagen: 'https://enfoqueteve.com/wp-content/uploads/2023/05/IMG_20230508_110028_1000_x_628_pixel.jpg'
  },
  {
    nombre: 'CASCADA LA ARAÑA',
    slug: 'cascada-la-arana',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Hermosa cascada natural ideal para caminatas ecológicas cerca de Ibagué.',
    imagen: '/images/cascada-arana.jpg'
  },
  {
    nombre: 'CASCADA LA MONTAÑA',
    slug: 'cascada-la-montana',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Destino de naturaleza con senderos y vistas panorámicas.',
    imagen: '/images/cascada-montana.jpg'
  },
  {
    nombre: 'CASCADA LA PLUMA - SAN JUAN DE LA CHINA',
    slug: 'cascada-la-pluma',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Cascada rodeada de vegetación ideal para turismo de aventura.',
    imagen: '/images/cascada-pluma.jpg'
  },
  {
    nombre: 'FINCA CIELO LINDO',
    slug: 'finca-cielo-lindo',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Experiencia campestre con paisajes naturales y descanso rural.',
    imagen: '/images/cielo-lindo.jpg'
  },
  {
    nombre: 'MUNDO SONORO',
    slug: 'mundo-sonoro',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Espacio cultural y musical representativo de Ibagué.',
    imagen: '/images/mundo-sonoro.jpg'
  },
  {
    nombre: 'TERMALES EL RANCHO',
    slug: 'termales-el-rancho',
    ciudad: 'ibague',
    ciudadLabel: 'Ibagué',
    description:
      'Aguas termales naturales ideales para relajación y bienestar.',
    imagen: '/images/termales-rancho.jpg'
  },

  // alvarado
  {
    nombre: 'CASCADA LA CAIMA',
    slug: 'cascada-la-caima',
    ciudad: 'alvarado',
    ciudadLabel: 'Alvarado',
    description:
      'La Cascada La Caima, ubicada en Alvarado (Tolima), es un destino natural rodeado de vegetación y aguas cristalinas',
    imagen: '/images/cascada-caima.jpg'
  },

  // anzoategui
  {
    nombre: 'PALOMAR',
    slug: 'palomar',
    description:
      'Corregimiento montañoso de Anzoátegui, perfecto para turismo de naturaleza y descanso rural.',
    imagen: '/images/palomar.jpg'
  }
]
</script>
