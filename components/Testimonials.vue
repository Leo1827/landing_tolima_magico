<template>
  <section id="testimonials" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- TÍTULO -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-[#6D1B2D] mb-4">
          Lo que dicen nuestros viajeros
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Experiencias reales de quienes han descubierto Colombia con Tolima Mágico.
        </p>
      </div>

      <!-- TESTIMONIOS -->
      <div class="grid md:grid-cols-3 gap-8">

        <div
          v-for="(t, index) in testimonials"
          :key="index"
          class="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
        >
          <i class="fa-solid fa-quote-left text-2xl text-[#D4AF37] mb-4"></i>

          <p class="text-gray-700 leading-relaxed mb-6">
            {{ t.comment }}
          </p>

          <div class="flex items-center gap-4">
            <img
              :src="t.avatar"
              class="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <p class="font-semibold text-[#6D1B2D]">
                {{ t.name }}
              </p>
              <p class="text-xs text-gray-500">
                {{ t.location }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Laura Martínez',
    location: 'Bogotá, Colombia',
    comment:
      'Una experiencia inolvidable. El avistamiento de aves en el Tolima superó todas mis expectativas.',
    avatar: '/images/testimonials/1.jpg'
  },
  {
    name: 'Daniel Gómez',
    location: 'Medellín, Colombia',
    comment:
      'Viajar con Tolima Mágico fue conectar con la naturaleza de una forma responsable y auténtica.',
    avatar: '/images/testimonials/2.jpg'
  },
  {
    name: 'Sofía Rojas',
    location: 'Cali, Colombia',
    comment:
      'Profesionalismo, seguridad y paisajes increíbles. Totalmente recomendado.',
    avatar: '/images/testimonials/3.jpg'
  }
]
</script>
