import { ref, onMounted } from 'vue'

export const useTolimaMap = (mapContainer, municipios) => {
  const hovered = ref(null)
  const selected = ref(null)

  const normalize = (text) =>
    text
      ?.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')

  onMounted(() => {
    const svg = mapContainer.value.querySelector('svg')
    const paths = svg.querySelectorAll('path')

    paths.forEach((path) => {
      const rawName =
        path.getAttribute('title') ||
        path.getAttribute('id')

      if (!rawName) return

      const key = normalize(rawName)

      path.addEventListener('mouseenter', () => {
        hovered.value = municipios[key] || { nombre: rawName }
      })

      path.addEventListener('mouseleave', () => {
        hovered.value = null
      })

      path.addEventListener('click', () => {
        paths.forEach(p => p.classList.remove('selected'))
        path.classList.add('selected')

        selected.value = municipios[key] || {
          nombre: rawName,
          descripcion: 'Información turística próximamente',
          tours: []
        }

        svg.classList.add('zoomed')
      })
    })
  })

  return {
    hovered,
    selected
  }
}
