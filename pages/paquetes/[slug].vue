<template>
  <section class="max-w-5xl mx-auto px-6 py-20">
    <NuxtLink to="/paquetes" class="text-[#D4AF37] mb-6 inline-block">
      ← Volver a paquetes
    </NuxtLink>

    <h1 class="text-4xl font-bold text-[#6D1B2D] mb-6">
      {{ paquete.nombre }}
    </h1>

    <img
      :src="paquete.imagen"
      :alt="paquete.nombre"
      class="w-full h-96 object-cover rounded-xl mb-8"
    />

    <p class="text-gray-700 text-lg mb-6">
      {{ paquete.descripcionLarga }}
    </p>

    <a
      href="https://wa.me/573229442351"
      target="_blank"
      class="inline-block px-8 py-3 rounded-full bg-[#6D1B2D] text-white font-semibold hover:bg-[#D4AF37] transition"
    >
      Reservar por WhatsApp
    </a>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const paquetes = {
  'tolima-aventura': {
    nombre: 'Tolima Aventura',
    imagen: '/images/paquetes/aventura.jpg',
    descripcionLarga:
      'Un paquete lleno de aventura, senderismo, cascadas y cultura local.'
  },
  'desierto-tatacoa': {
    nombre: 'Desierto de la Tatacoa',
    imagen: '/images/paquetes/tatacoa.jpg',
    descripcionLarga:
      'Vive la experiencia astronómica y paisajística del desierto.'
  }
}

const paquete = paquetes[route.params.slug]
</script>
