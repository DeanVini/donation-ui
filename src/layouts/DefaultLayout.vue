<template>
  <div class="w-full h-full">
    <div class="flex gap-4 p-4 w-full items-center justify-end absolute w-full z-10">
      <DarkModeToggle class="w-fit max-w-18" />
      <LanguageSelector />
    </div>
    <div class="w-full flex relative">
      <div class="w-fit absolute h-full" ref="navBarRef">
        <LateralNavBar />
      </div>
      <div :style="{ marginLeft: navBarWidth + 'px' }" class="w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LateralNavBar from '@/components/LateralNavBar.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const navBarRef = ref<HTMLDivElement | null>(null)
const navBarWidth = ref(0)

const updateNavBarWidth = () => {
  if (navBarRef.value) {
    navBarWidth.value = navBarRef.value.offsetWidth
  }
}

onMounted(() => {
  nextTick(updateNavBarWidth)

  window.addEventListener('resize', updateNavBarWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateNavBarWidth)
})
</script>
