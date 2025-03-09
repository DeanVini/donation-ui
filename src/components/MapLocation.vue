<template>
  <div class="! rounded-t" id="map" style="height: 100%; width: 100%"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const props = defineProps({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
})

const zoom = ref(150)

const mountMap = () => {
  const map = L.map('map').setView([props.latitude, props.longitude], zoom.value)
  const customIcon = L.icon({
    iconUrl:
      'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  L.marker([props.latitude, props.longitude], { icon: customIcon })
    .addTo(map)
    .bindPopup('Este é o local!')
    .openPopup()
}

onMounted(() => {
  mountMap()

  const elm = document.getElementsByClassName('leaflet-pane leaflet-marker-pane')
  console.log(elm[0])
})
</script>

<style>
.leaflet-pane {
  z-index: 1 !important;
}

.leaflet-control {
  z-index: 2 !important;
}

.leaflet-top {
  z-index: 2 !important;
}
</style>
