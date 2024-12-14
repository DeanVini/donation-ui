<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LoginUsuario from './views/LoginUsuario.vue'
import SelectModoEscuro from '@/components/SelectModoEscuro.vue'
</script>

<template>
  <header>
    <LoginUsuario />
    <SelectModoEscuro class="absolute" />
  </header>
</template>

<style scoped></style>
