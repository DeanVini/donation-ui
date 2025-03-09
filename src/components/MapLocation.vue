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

onMounted(() => {
  const map = L.map('map').setView([props.latitude, props.longitude], zoom.value)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  L.marker([props.latitude, props.longitude]).addTo(map).bindPopup('Este é o local!').openPopup()
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
