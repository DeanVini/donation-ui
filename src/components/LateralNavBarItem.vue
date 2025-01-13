<template>
  <div class="flex relative flex-col gap-2 w-full">
    <div class="absolute bg-slate-900 dark:bg-slate-200 w-[2.5px] h-full rounded"></div>
    <div class="p-1 ml-3 flex gap-3">
      <House :size="21" />
      Home
    </div>
  </div>
  <div class="flex relative flex-col gap-2 w-full">
    <div class="absolute w-[2.5px] h-full rounded"></div>
    <div class="p-1 ml-3 flex gap-3">
      <House :size="21" />
      Home
    </div>
  </div>
</template>

<script setup lang="ts">
import { House } from 'lucide-vue-next'
import type { PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<{
      label: string
      icon: object
      link: string
    }>,
  },
})
</script>
