<template>
  <header>
    <component :is="layout">
      <RouterView />
    </component>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import { computed } from 'vue'

const route = useRoute()
const layout = computed(() => route.meta.layout)
</script>

<style scoped></style>
