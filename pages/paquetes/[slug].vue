<template>
  <section
    class="
      min-h-screen
      w-full
      flex
      bg-[#f3f3f3]

      /* Desktop */
      lg:bg-gray-100
      lg:items-center
      lg:justify-center
      lg:p-10
    "
  >
    <!-- Wrapper -->
    <div
      class="
        w-full
        min-h-screen
        bg-white
        overflow-hidden
        shadow-2xl

        /* Mobile look (tipo teléfono) */
        rounded-[40px]

        /* Desktop PRO */
        lg:min-h-0
        lg:max-w-6xl
        lg:grid
        lg:grid-cols-2
        lg:rounded-3xl
        lg:shadow-xl
      "
    >
      <!-- 🖼️ HERO -->
      <div class="relative lg:h-full group">
        <img
          :src="paquete.imagen"
          :alt="paquete.nombre"
          class="
            h-[42vh]
            w-full
            object-cover
            transition
            duration-700

            /* Desktop hero pro */
            lg:h-[32vh]
            lg:min-h-[560px]
            lg:group-hover:scale-105
          "
        />

        <!-- Gradient overlay desktop -->
        <div
          class="
            hidden
            lg:block
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-black/10
            to-transparent
          "
        />

        <!-- Botón volver -->
        <NuxtLink
          to="/paquetes"
          class="
            absolute
            top-4
            left-4
            bg-white/90
            backdrop-blur
            rounded-full
            p-2
            shadow
            hover:scale-110
            transition
          "
        >
          ←
        </NuxtLink>

        <!-- Overlay móvil -->
        <div class="absolute bottom-4 left-4 right-4 text-white lg:hidden">
          <h1 class="text-2xl font-bold drop-shadow-lg">
            {{ paquete.nombre }}
          </h1>
          <p class="text-sm opacity-90">Tolima, Colombia</p>
        </div>
      </div>

      <!-- 📦 CONTENIDO -->
      <div
        class="
          p-6
          flex
          flex-col

          /* Desktop */
          lg:p-12
          lg:justify-center
        "
      >
        <!-- Título desktop -->
        <div class="hidden lg:block mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-2">
            {{ paquete.nombre }}
          </h1>
          <p class="text-gray-500 text-lg">Tolima, Colombia</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 text-center mb-8">
          <div>
            <p class="text-xs text-gray-400">Distancia</p>
            <p class="font-bold text-[#0f2f1f] lg:text-xl">7 km</p>
          </div>
          <div>
            <p class="text-xs text-gray-400">Temp</p>
            <p class="font-bold text-[#0f2f1f] lg:text-xl">28°C</p>
          </div>
          <div>
            <p class="text-xs text-gray-400">Rating</p>
            <p class="font-bold text-[#0f2f1f] lg:text-xl">4.8</p>
          </div>
        </div>

        <!-- Descripción -->
        <h3 class="font-semibold text-gray-900 mb-3 lg:text-xl">
          Descripción
        </h3>

        <p
          class="
            text-sm
            text-gray-600
            leading-relaxed
            mb-10

            lg:text-base
            lg:max-w-xl
          "
        >
          {{ paquete.descriptionLarga }}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between mt-auto">
          <div>
            <p class="text-xs text-gray-400">Precio desde</p>
            <p class="text-2xl font-extrabold text-gray-900 lg:text-4xl">
              $1.270.000
            </p>
          </div>

          <a
            href="https://wa.me/573229442351"
            target="_blank"
            class="
              h-14
              w-14
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              hover:shadow-lg
              transition
            "
          >
            →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { useRoute } from 'vue-router'

  const route = useRoute()

const paquetes = {
  'canon-del-combeima': {
    nombre: 'CAÑON DEL COMBEIMA',
    descriptionLarga:
      'Parque Nacional Natural Los Nevados, cerca de Ibagué. Montañas, cascadas y bosques',
    imagen: '/images/rancho.jpg'
  },

  'toche': {
    nombre: 'TOCHE',
    descriptionLarga:
      'Rodeado de bosques andinos, hábitat de la palma de cera árbol nacional de Colombia.',
    imagen: '/images/toche.jpg'
  },

  'pan-de-azucar': {
    nombre: 'PAN DE AZUCAR',
    descriptionLarga:
      'Destino de montaña ideal para senderismo y aventura en el Tolima.',
    imagen: 'https://enfoqueteve.com/wp-content/uploads/2023/05/IMG_20230508_110028_1000_x_628_pixel.jpg'
  },

  'cascada-la-arana': {
    nombre: 'CASCADA LA ARAÑA',
    descriptionLarga:
      'Hermosa cascada natural ideal para caminatas ecológicas cerca de Ibagué.',
    imagen: '/images/cascada-arana.jpg'
  },

  'cascada-la-montana': {
    nombre: 'CASCADA LA MONTAÑA - TOTUMO',
    descriptionLarga:
      'Destino de naturaleza con senderos y vistas panorámicas.',
    imagen: '/images/cascada-montana.jpg'
  },

  'cascada-la-pluma': {
    nombre: 'CASCADA LA PLUMA - SAN JUAN DE LA CHINA',
    descriptionLarga:
      'Cascada rodeada de vegetación ideal para turismo de aventura.',
    imagen: '/images/cascada-pluma.jpg'
  },

  'finca-cielo-lindo': {
    nombre: 'FINCA CIELO LINDO',
    descriptionLarga:
      'Experiencia campestre con paisajes naturales y descanso rural.',
    imagen: '/images/cielo-lindo.jpg'
  },

  'mundo-sonoro': {
    nombre: 'MUNDO SONORO',
    descriptionLarga:
      'Espacio cultural y musical representativo de Ibagué.',
    imagen: '/images/mundo-sonoro.jpg'
  },

  'termales-el-rancho': {
    nombre: 'TERMALES EL RANCHO',
    descriptionLarga:
      'Aguas termales naturales ideales para relajación y bienestar.',
    imagen: '/images/termales-rancho.jpg'
  },

  // Alvarado
  'cascada-la-caima': {
    nombre: 'CASCADA LA CAIMA',
    descriptionLarga:
      'La Cascada La Caima, ubicada en Alvarado (Tolima), es un destino natural rodeado de vegetación y aguas cristalinas.',
    imagen: '/images/cascada-caima.jpg'
  },

  // Anzoategui
  'palomar': {
    nombre: 'PALOMAR',
    descriptionLarga:
      'Corregimiento montañoso de Anzoátegui, perfecto para turismo de naturaleza y descanso rural.',
    imagen: '/images/palomar.jpg'
  }
}
  const paquete = paquetes[route.params.slug]
</script>
