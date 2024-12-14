<template>
  <div class="flex items-center space-x-2">
    <button
      class="dark:text-slate-200 text-yellow-400 transition-colors"
      @click="atualizarModoEscuro()"
    >
      <SunMoon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { SunMoon } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const modoEscuro = useDark()
const atualizarModoEscuro = useToggle(modoEscuro)
</script>

<style scoped></style>
