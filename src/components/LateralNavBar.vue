<template>
  <div
    class="max-w-[5rem] hover:max-w-[14rem] transition-all border h-full pr-4 rounded-lg p-2 pt-0 border-slate-900 dark:border-gray-200 backdrop-blur-md"
    @mouseover="showName = true"
    @mouseleave="showName = false"
  >
    <div class="flex justify-center items-center p-4">
      <transition name="fade" mode="out-in">
        <h2 v-if="showName">CareOn</h2>
        <h2 v-else>C</h2>
      </transition>
    </div>
    <nav
      aria-label="Main Navigation"
      class="flex flex-col gap-2 border-t pt-4 border-slate-900 dark:border-gray-200"
    >
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
