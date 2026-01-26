<template>
  <section
    id="contacto"
    class="py-24 bg-[#6D1B2D] text-white"
  >
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

      <!-- INFO -->
      <div>
        <h2 class="text-4xl font-bold mb-6">
          Planifica tu próxima aventura
        </h2>

        <p class="text-white/80 mb-10 leading-relaxed">
          Nuestro equipo está listo para ayudarte a crear una experiencia
          auténtica y responsable en los destinos más increíbles de Colombia.
        </p>

        <div class="space-y-6 text-sm">
          <div class="flex items-center gap-4">
            <i class="fa-solid fa-location-dot text-[#D4AF37] text-xl"></i>
            <span>Tolima, Colombia</span>
          </div>

          <div class="flex items-center gap-4">
            <i class="fa-solid fa-envelope text-[#D4AF37] text-xl"></i>
            <span>contacto@tolimamagico.co</span>
          </div>

          <div class="flex items-center gap-4">
            <i class="fa-brands fa-whatsapp text-[#D4AF37] text-xl"></i>
            <span>+57 300 000 0000</span>
          </div>
        </div>
      </div>

      <!-- FORMULARIO -->
      <div class="bg-white rounded-3xl p-8 text-[#2b2b2b] shadow-2xl">
        <h3 class="text-xl font-bold mb-6 text-[#6D1B2D]">
          Escríbenos
        </h3>

        <form class="grid gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            class="w-full border border-gray-300 rounded-lg px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            class="w-full border border-gray-300 rounded-lg px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="Destino de interés"
            class="w-full border border-gray-300 rounded-lg px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <textarea
            rows="4"
            placeholder="Mensaje"
            class="w-full border border-gray-300 rounded-lg px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          ></textarea>

          <button
            type="submit"
            class="mt-4 bg-[#D4AF37] text-[#6D1B2D] py-3 rounded-full
                   font-semibold hover:scale-105 transition"
          >
            Enviar solicitud
          </button>
        </form>
      </div>

    </div>
  </section>
</template>
