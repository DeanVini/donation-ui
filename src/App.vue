<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>

<template>
  <header>
    <DarkModeToggle class="absolute" />
    <RouterView />
  </header>
</template>

<style scoped></style>
