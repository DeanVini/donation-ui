<template>
  <div class="w-full h-full relative r">
    <div class="absolute flex gap-4 p-4 w-full items-center justify-end">
      <DarkModeToggle class="w-fit" />
      <LanguageSelector />
    </div>
    <div class="w-full flex">
      <div class="w-fit">
        <LateralNavBar />
      </div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import LateralNavBar from '@/components/LateralNavBar.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
</script>
