<template>
  <div ref="mapContainer" class="w-full h-[420px] rounded-2xl"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const emit = defineEmits(['select'])

const mapContainer = ref(null)

onMounted(async () => {
  const map = L.map(mapContainer.value, {
    center: [4.4389, -75.2322],
    zoom: 8,
    scrollWheelZoom: false
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map)

  const response = await fetch('/geo/tolima_municipios.geojson')
  const geoData = await response.json()

  L.geoJSON(geoData, {
    style: {
      color: '#6D1B2D',
      weight: 1,
      fillColor: '#D4AF37',
      fillOpacity: 0.5
    },
    onEachFeature: (feature, layer) => {
      layer.on('click', () => {
        emit('select', feature.properties.NOMBRE)
      })
    }
  }).addTo(map)
})
</script>
