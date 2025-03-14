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
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import SystemToaster from '@/components/SystemToaster.vue'

const route = useRoute()
const layout = computed(() => route.meta.layout)
</script>

<style>
.flicking-pagination-bullet {
  @apply bg-gray-200 dark:bg-neutral-900;
}

.flicking-pagination-bullet-active {
  @apply bg-clementine-400 !important;
}
</style>
