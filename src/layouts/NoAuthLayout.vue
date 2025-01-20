<template>
  <div class="absolute flex gap-4 p-2 w-full items-center justify-end">
    <LanguageSelector />
    <DarkModeToggle class="w-fit" />
  </div>
  <RouterView />
</template>
<script setup lang="ts">
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>

<style scoped></style>
