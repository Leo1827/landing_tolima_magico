<template>
  <header
    class="fixed top-0 w-full z-75 bg-white/20 backdrop-blur-md border-b border-[#6D1B2D]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- LOGO -->
      <a href="/" class="flex items-center gap-3">
        <img
          src="/images/logo.png"
          alt="Tolima Mágico - Turismo Regional en Colombia"
          class="h-10 md:h-12 w-auto"
        />
        <span class="hidden sm:block text-xl font-bold text-[#6D1B2D]">
          Tolima <span class="text-[#D4AF37]">Mágico</span>
        </span>
      </a>

      <!-- NAV DESKTOP -->
      <nav class="hidden md:flex items-center gap-8 font-medium">
        <a href="#inicio" class="nav-link">Inicio</a>
        <a href="#nosotros" class="nav-link">Quiénes Somos</a>
        <a href="#destinos" class="nav-link">Destinos</a>
        <a href="#testimonials" class="nav-link">Experiencias</a>

        <!-- CTA -->
        <a
          href="#contacto"
          class="ml-4 px-5 py-2 rounded-full bg-[#6D1B2D] text-white font-semibold hover:bg-[#D4AF37] hover:text-[#6D1B2D] transition"
        >
          Explorar
        </a>
      </nav>

      <!-- BOTÓN MÓVIL -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden text-[#6D1B2D] focus:outline-none"
        aria-label="Abrir menú"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

    </div>

    <!-- MENU MÓVIL -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-white border-t border-gray-200"
    >
      <nav class="flex flex-col px-6 py-6 gap-4 font-medium">
        <a @click="closeMenu" href="#inicio" class="mobile-link">Inicio</a>
        <a @click="closeMenu" href="#nosotros" class="mobile-link">Quiénes Somos</a>
        <a @click="closeMenu" href="#destinos" class="mobile-link">Destinos</a>
        <a @click="closeMenu" href="#experiencias" class="mobile-link">Experiencias</a>
        <a @click="closeMenu" href="#contacto" class="mobile-link">Contacto</a>

        <a
          href="#destinos"
          class="mt-4 text-center px-6 py-3 rounded-full bg-[#6D1B2D] text-white font-semibold"
        >
          Explorar destinos
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  position: relative;
  color: #6D1B2D;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D4AF37;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #D4AF37;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-link {
  color: #6D1B2D;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
</style>
