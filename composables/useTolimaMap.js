import { ref, onMounted, computed } from 'vue'

export const useTolimaMap = (mapContainer, municipios) => {
  const hovered = ref(null)
  const selected = ref(null)

  const normalize = (text) =>
    text
      ?.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '')
      .toLowerCase()

  // Normaliza las claves del objeto municipios
  const municipiosNormalized = {}
  Object.keys(municipios).forEach(key => {
    municipiosNormalized[normalize(key)] = municipios[key]
  })

  onMounted(() => {
    const svg = mapContainer.value.querySelector('svg')
    if (!svg) return
    const paths = svg.querySelectorAll('path')

    // Tooltip para mostrar nombre al pasar el mouse
    const tooltip = document.createElement('div')
    tooltip.style.position = 'absolute'
    tooltip.style.pointerEvents = 'none'
    tooltip.style.background = 'rgba(0,0,0,0.7)'
    tooltip.style.color = 'white'
    tooltip.style.padding = '2px 6px'
    tooltip.style.borderRadius = '4px'
    tooltip.style.fontSize = '12px'
    tooltip.style.transition = 'opacity 0.2s'
    tooltip.style.opacity = 0
    mapContainer.value.appendChild(tooltip)

    paths.forEach((path) => {
      const rawName = path.getAttribute('title') || path.getAttribute('id')
      if (!rawName) return

      const key = normalize(rawName)
      const municipio = municipiosNormalized[key]

      // Solo dibuja estrella si existe municipio y tiene tours
      if (municipio && Array.isArray(municipio.tours) && municipio.tours.length > 0) {
        const bbox = path.getBBox()
        const cx = bbox.x + bbox.width / 2
        const cy = bbox.y + bbox.height / 2

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        g.setAttribute('class', 'event-marker')
        g.setAttribute('transform', `translate(${cx}, ${cy})`)
        g.style.pointerEvents = 'none'

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        circle.setAttribute('r', 7)
        circle.setAttribute('fill', '#D4AF37')

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        text.setAttribute('text-anchor', 'middle')
        text.setAttribute('dy', '0.35em')
        text.setAttribute('font-size', '8')
        text.setAttribute('fill', '#000')
        text.textContent = '★'

        g.appendChild(circle)
        g.appendChild(text)
        path.parentNode.appendChild(g)
      }

      // ==============================
      // Hover y click
      // ==============================
      path.addEventListener('mouseenter', (e) => {
        hovered.value = municipio || { nombre: rawName }
        path.classList.add('hovered')

        const rect = mapContainer.value.getBoundingClientRect()
        tooltip.textContent = rawName
        tooltip.style.left = `${e.clientX - rect.left + 12}px`
        tooltip.style.top = `${e.clientY - rect.top}px`
        tooltip.style.opacity = 1
      })

      path.addEventListener('mousemove', (e) => {
        const rect = mapContainer.value.getBoundingClientRect()
        tooltip.style.left = `${e.clientX - rect.left + 12}px`
        tooltip.style.top = `${e.clientY - rect.top}px`
      })

      path.addEventListener('mouseleave', () => {
        hovered.value = null
        path.classList.remove('hovered')
        tooltip.style.opacity = 0
      })

      path.addEventListener('click', () => {
        paths.forEach(p => p.classList.remove('selected'))
        path.classList.add('selected')

        selected.value = municipio || {
          nombre: rawName,
          descripcion: 'Información turística próximamente',
          tours: []
        }
      })
    })
  })

  return {
    hovered,
    selected
  }
}

const limitedTours = computed(() => {
  if (!selected.value?.tours) return []
  return selected.value.tours.slice(0, 2)
})

const showVerMas = computed(() => {
  return selected.value?.tours?.length > 2
})
