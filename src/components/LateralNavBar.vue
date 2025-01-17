<template>
  <div
    class="max-w-30 border h-full pr-4 rounded-lg p-2 pt-0"
    @mouseover="showName = true"
    @mouseleave="showName = false"
  >
    <div class="flex justify-center items-center p-4">
      <h2>{{ showName ? 'CareOn' : 'C' }}</h2>
    </div>
    <nav class="flex flex-col gap-2 border-t pt-4">
      <div v-for="item in NAV_ITEMS" :key="item.path">
        <LateralNavBarItem :item="item" :show-name="showName" />
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import LateralNavBarItem from '@/components/LateralNavBarItem.vue'
import { NAV_ITEMS } from '@/constants/navBarItems'
import { ref } from 'vue'

const showName = ref(false)
</script>
