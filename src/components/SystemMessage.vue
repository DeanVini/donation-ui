<template>
  <div :class="[baseClasses, tailwindColorClass[props.type]]">
    <component v-if="props.icon" strokeWidth="1.1" :is="props.icon" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { PropType, Component } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'error' | 'info' | 'success' | 'alert' | 'contrast' | 'neutral'>,
    default: 'contrast',
  },
  icon: {
    type: Object as PropType<Component>,
    default: null,
  },
})

const baseClasses = 'flex gap-1 p-1 px-2 rounded-lg border shadow-md'

const tailwindColorClass = {
  error:
    'bg-coral-red-500 text-coral-red-700 border-coral-red-500 shadow-coral-red-500/10 border-opacity-50 bg-opacity-10',
  success:
    'bg-spring-green-500 text-spring-green-600 border-spring-green-600/20 shadow-spring-green-500/10 border-opacity-50 bg-opacity-10',
  info: 'bg-blue-500 text-blue-600 border-blue-600 shadow-blue-500/10 border-opacity-50 bg-opacity-10',
  alert:
    'bg-broom-500 text-broom-700 border-broom-600 shadow-broom-500/10 border-opacity-50 bg-opacity-10',
  contrast:
    'bg-neutral-900 text-neutral-200 border-neutral-900 dark:bg-gray-200 dark-border-gray-200 dark:text-neutral-900',
  neutral:
    'bg-neutral-500 text-light-blue-700 border-neutral-500/20 shadow-neutral-500/10 bg-opacity-10',
} as const
</script>

<style scoped></style>
