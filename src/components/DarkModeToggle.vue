<template>
  <div class="flex items-center space-x-2">
    <button class="dark:text-slate-200 text-yellow-400 transition-colors" @click="updateDarkMode()">
      <SunMoon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { SunMoon } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const darkMode = useDark()
const updateDarkMode = useToggle(darkMode)
</script>

<style scoped></style>
