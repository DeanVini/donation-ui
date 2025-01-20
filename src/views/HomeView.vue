<template>
  <main class="w-full h-screen flex justify-center items-center flex-col gap-4">
    <div class="w-fit flex flex-col items-center">
      <SystemMessage type="success" :icon="Check"> {{ t('loginSuccess') }}</SystemMessage>
    </div>
  </main>
</template>
<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import SystemMessage from '@/components/SystemMessage.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
