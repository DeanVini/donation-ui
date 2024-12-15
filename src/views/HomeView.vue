<template>
  <main class="w-full h-screen flex justify-center items-center">
    <MensagemSistema tipo="sucesso" :icone="Check"> Login feito com sucesso</MensagemSistema>
  </main>
</template>
<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import MensagemSistema from '@/components/MensagemSistema.vue'
</script>
