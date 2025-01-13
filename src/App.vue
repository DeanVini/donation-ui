<template>
  <header>
    <DarkModeToggle class="w-fit" />
    <div class="absolute flex gap-4 p-3">
      <LanguageSelector />
    </div>
    <RouterView />
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>

<style scoped></style>
