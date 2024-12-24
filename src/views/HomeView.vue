<template>
  <main class="w-full h-screen flex justify-center items-center flex-col gap-4">
    <div class="w-fit flex flex-col items-center">
      <ItemBarraNavegacao />
      <SystemMessage type="neutral" :icon="Check"> Login feito com sucesso</SystemMessage>
    </div>
  </main>
</template>
<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import SystemMessage from '@/components/SystemMessage.vue'
import ItemBarraNavegacao from '@/components/LateralNavBarItem.vue'
</script>
