<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <h1 class="text-4xl font-bold text-[#6D1B2D] mb-10">
      Nuestros Paquetes
    </h1>

    <div class="grid md:grid-cols-3 gap-8">
      <NuxtLink
        v-for="paquete in paquetes"
        :key="paquete.slug"
        :to="`/paquetes/${paquete.slug}`"
        class="border rounded-xl overflow-hidden hover:shadow-lg transition"
      >
        <img
          :src="paquete.imagen"
          :alt="paquete.nombre"
          class="h-48 w-full object-cover"
        />

        <div class="p-5">
          <h2 class="text-xl font-semibold text-[#6D1B2D]">
            {{ paquete.nombre }}
          </h2>
          <p class="text-gray-600 mt-2">
            {{ paquete.descripcion }}
          </p>

          <span class="inline-block mt-4 text-[#D4AF37] font-semibold">
            Ver paquete →
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const paquetes = [
  {
    nombre: 'Tolima Aventura',
    slug: 'tolima-aventura',
    descripcion: 'Naturaleza, senderismo y experiencias únicas.',
    imagen: '/images/paquetes/aventura.jpg'
  },
  {
    nombre: 'Desierto de la Tatacoa',
    slug: 'desierto-tatacoa',
    descripcion: 'Explora uno de los paisajes más increíbles de Colombia.',
    imagen: '/images/paquetes/tatacoa.jpg'
  }
]
</script>
