<script setup>
import { useHead } from '#app'

useHead({
  title: 'Tolima Mágico | Turismo Regional en Colombia',

  htmlAttrs: {
    lang: 'es-CO'
  },

  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap'
    },
        // Font Awesome
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/images/logo.png'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://img.icons8.com/color/180/map-marker.png'
    }
  ],

  meta: [
    // Básico SEO
    {
      name: 'description',
      content: 'Tolima Mágico es una agencia de turismo regional que promueve los destinos, la cultura, la naturaleza y las experiencias únicas del Tolima, Colombia.'
    },
    {
      name: 'keywords',
      content: 'Tolima, turismo en Tolima, viajes Colombia, turismo regional, naturaleza, cultura, aventura'
    },
    {
      name: 'author',
      content: 'Tolima Mágico'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, viewport-fit=cover'
    },

    // Open Graph
    {
      property: 'og:title',
      content: 'Tolima Mágico | Descubre el corazón de Colombia'
    },
    {
      property: 'og:description',
      content: 'Explora los mejores destinos turísticos del Tolima: naturaleza, cultura, gastronomía y aventura.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:locale',
      content: 'es_CO'
    },
    {
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=630'
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },

    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Tolima Mágico | Turismo Regional'
    },
    {
      name: 'twitter:description',
      content: 'Vive experiencias inolvidables en el Tolima, Colombia.'
    },
    {
      name: 'twitter:image',
      content: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=630'
    }
  ]
})
</script>

<template>
  <NuxtPage />
</template>
