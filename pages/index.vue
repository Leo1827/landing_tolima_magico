<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <Hero />
    <About />
    <Packages />
    <ContactForm />
    <Testimonials />
    <AnnouncementsSection />
    <ScrollTop />
    <Footer />
    <Preloader />
    <!-- ================= FLOATING SOCIALS ================= -->
    <div class="fixed right-4 top-1/3 z-50 space-y-3">
      <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6D1B2D] text-white hover:bg-[#D4AF37] transition">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6D1B2D] text-white hover:bg-[#D4AF37] transition">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6D1B2D] text-white hover:bg-[#D4AF37] transition">
        <i class="fab fa-tiktok"></i>
      </a>
    </div>
    <!-- ================= WHATSAPP ================= -->
    <a href="https://wa.me/573000000000" target="_blank"
      class="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition z-50">
      <i class="fab fa-whatsapp"></i>
    </a>

  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Preloader from '@/components/Preloader.vue'
  import Hero from '@/components/Hero.vue'
  import About from '@/components/About.vue'
  import Packages from '@/components/Packages.vue'
  import Testimonials from '@/components/Testimonials.vue'
  import AnnouncementsSection from '@/components/AnnouncementsSection.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import ScrollTop from '@/components/ScrollTop.vue'
  import Footer from '@/components/Footer.vue'
</script>

