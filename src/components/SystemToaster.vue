<template>
  <Teleport to="body">
    <Transition name="list">
      <ul v-if="toastStore.activeToasts.length > 0" class="fixed top-0 right-0 z-[10000]">
        <TransitionGroup name="list" tag="ul">
          <li v-for="toast in toastStore.activeToasts" :key="toast.id" class="m-4 backdrop-blur-md">
            <SystemMessage :type="toast.status" show-icon>
              <div>
                <header class="font-semibold">
                  {{ toast.title }}
                </header>
                <div>
                  {{ toast.text }}
                </div>
              </div>
            </SystemMessage>
          </li>
        </TransitionGroup>
      </ul>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/useToastStore'
import SystemMessage from '@/components/SystemMessage.vue'

const toastStore = useToastStore()

const tailwindColorClass = {
  error: {
    title: 'text-coral-red-500',
    container: 'bg-coral-red-500/20 border-coral-red-500',
  },
  success: {
    title: 'text-spring-green-500',
    container: 'bg-spring-green-500/20 border-spring-green-500',
  },
  info: {
    title: 'text-blue-500',
    container: 'bg-blue-500/20 border-blue-500',
  },
  alert: {
    title: 'text-broom-500',
    container: 'bg-broom-500/20 border-broom-500',
  },
  contrast: {
    title: 'text-slate-200',
    container: 'bg-slate-200/20 border-slate-200',
  },
  neutral: {
    title: 'text-neutral-500',
    container: 'bg-neutral-500/20 border-neutral-500',
  },
} as const
</script>

<style scoped></style>
