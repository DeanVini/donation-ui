<template>
  <div :class="[baseClasses, tailwindColorClass[props.type].class]">
    <component v-if="activeIcon" strokeWidth="1.1" :is="activeIcon" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { type PropType, type Component, computed } from 'vue'
import type { MessageStatus } from '@/constants/messageStatus'
import { CircleX, Check, Info, TriangleAlert } from 'lucide-vue-next'

const props = defineProps({
  type: {
    type: String as PropType<MessageStatus>,
    default: 'contrast',
  },
  icon: {
    type: Object as PropType<Component>,
    default: null,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
})

const activeIcon = computed(() => {
  if (props.icon) {
    return props.icon
  }
  if (props.showIcon) {
    return tailwindColorClass[props.type].icon
  }
})

const baseClasses = 'flex gap-1 p-1 px-2 rounded-lg border shadow-md'

const tailwindColorClass = {
  error: {
    class:
      'bg-coral-red-500 text-coral-red-700 border-coral-red-500 shadow-coral-red-500/10 border-opacity-50 bg-opacity-10',
    icon: CircleX,
  },
  success: {
    class:
      'bg-spring-green-500 text-spring-green-600 border-spring-green-600/20 shadow-spring-green-500/10 border-opacity-50 bg-opacity-10',
    icon: Check,
  },
  info: {
    class:
      'bg-blue-500 text-blue-600 border-blue-600 shadow-blue-500/10 border-opacity-50 bg-opacity-10',
    icon: Info,
  },
  alert: {
    class:
      'bg-broom-500 text-broom-700 border-broom-600 shadow-broom-500/10 border-opacity-50 bg-opacity-10',
    icon: TriangleAlert,
  },
  contrast: {
    class:
      'bg-neutral-900 text-neutral-200 border-neutral-900 dark:bg-gray-200 dark-border-gray-200 dark:text-neutral-900',
    icon: null,
  },
  neutral: {
    class:
      'bg-neutral-500 text-light-blue-700 border-neutral-500/20 shadow-neutral-500/10 bg-opacity-10',
    icon: null,
  },
} as const
</script>

<style scoped></style>
