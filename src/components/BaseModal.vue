<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="modalState"
        class="fixed items-center z-[9998] top-0 left-0 w-screen h-screen bg-neutral-800/60 flex justify-center"
        @click="modalState = false"
      >
        <div class="min-h-[40%] bg-default shadow rounded-lg p-4" @click.stop="">
          <div class="w-full flex justify-end">
            <button
              class="absolute ease-in-out duration-300 hover:-translate-y-[3px]"
              @click="modalState = false"
            >
              <X />
            </button>
          </div>
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const modalState = defineModel({
  type: Boolean,
  default: false,
})
</script>

<style scoped></style>
