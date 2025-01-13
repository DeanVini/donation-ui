<template>
  <div class="relative inline-block">
    <button ref="buttonRef" @click="toggleDropdown">
      <slot name="activator"></slot>
    </button>
    <transition name="dropdown" @before-enter="updatePosition" @after-enter="onEnter">
      <div
        v-show="isOpen"
        :style="{ top: styles.top, left: styles.left }"
        ref="dropdownRef"
        class="absolute z-50 p-2 rounded shadow-lg dark:bg-neutral-800 bg-neutral-50"
      >
        <div
          class="p-1 dark:bg-neutral-800 bg-neutral-50"
          :class="arrowTransform"
          ref="floatingArrow"
          :style="{
            position: 'absolute',
            left: middlewareDataRef?.arrow?.x != null ? `${middlewareDataRef.arrow.x}px` : '',
            top: middlewareDataRef?.arrow?.y != null ? `${middlewareDataRef.arrow.y}px` : '',
          }"
        ></div>
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { computePosition, autoPlacement, offset, flip, shift } from '@floating-ui/dom'
import { arrow, type MiddlewareData } from '@floating-ui/vue'

const isOpen = ref(false)
const buttonRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const floatingArrow = ref(null)
const styles = ref<{ top: string; left: string }>({
  top: '0px',
  left: '0px',
})
const placement = ref<'top' | 'bottom' | 'left' | 'right'>('bottom')
const middlewareDataRef = ref<MiddlewareData | null>(null)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

async function updatePosition() {
  if (!buttonRef.value || !dropdownRef.value) return

  const button = buttonRef.value
  const dropdown = dropdownRef.value

  const {
    x,
    y,
    placement: resolvedPlacement,
    middlewareData,
  } = await computePosition(button, dropdown, {
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 8 }),
      autoPlacement({
        alignment: 'start',
        allowedPlacements: ['bottom', 'top', 'right', 'left'],
      }),
      arrow({ element: floatingArrow }),
    ],
  })
  middlewareDataRef.value = middlewareData

  placement.value = resolvedPlacement.split('-')[0] as 'top' | 'bottom' | 'left' | 'right'

  styles.value = {
    top: `${y}px`,
    left: `${x}px`,
  }
}

function handleClickOutside(event: MouseEvent) {
  const button = buttonRef.value as HTMLElement
  const dropdown = dropdownRef.value as HTMLElement

  if (!button.contains(event.target as Node) && !dropdown.contains(event.target as Node)) {
    isOpen.value = false
  }
}

function onEnter() {
  updatePosition()
}

watch(isOpen, (open) => {
  if (open) {
    updatePosition()
  }
})

onMounted(() => {
  window.addEventListener('resize', updatePosition)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const arrowTransform = computed(() => {
  switch (placement.value) {
    case 'top':
      return 'translate-x-[-50%] translate-y-[50%] rotate-45'
    case 'bottom':
      return 'translate-y-[-145%] rotate-45'
    case 'left':
      return 'translate-x-[-50%] translate-y-[-50%] rotate-45'
    case 'right':
      return 'translate-x-0 translate-y-0 rotate-45'
    default:
      return ''
  }
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
