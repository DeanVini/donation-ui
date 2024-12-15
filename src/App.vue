<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginUsuario from './views/LoginUsuario.vue'
import SelectModoEscuro from '@/components/SelectModoEscuro.vue'
</script>

<template>
  <header>
    <SelectModoEscuro class="absolute" />
    <RouterView />
  </header>
</template>

<style scoped></style>
