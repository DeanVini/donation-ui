<template>
  <header>
    <component v-if="layout" :is="layout">
      <RouterView />
    </component>
    <RouterView v-else />
    <SystemToaster />
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import { computed } from 'vue'
import SystemToaster from '@/components/SystemToaster.vue'

const route = useRoute()
const layout = computed(() => route.meta.layout)
</script>

<style scoped></style>
