<template>
  <div class="w-fit">
    <label for="input" class="relative h-full">
      <span
        :class="{
          'translate-y-[-90%] translate-x-[-7px]': labelAcima,
          'dark:!text-zinc-400': emFoco,
        }"
        class="absolute ml-1 text-zinc-500 dark:text-zinc-500 p-1 pt-1.5 w-full transition-all h-max flex pointer-events-none items-center"
      >
        {{ props.label }}
      </span>
      <input
        :value="props.valorInput"
        :id="props.label"
        :type="props.type"
        @focusin="(event) => lidarFocusInInput((event.target as HTMLInputElement).value)"
        @focusout="(event) => lidarFocusOutInput((event.target as HTMLInputElement).value)"
        @input="
          (event) => emit('atualizar:valorInput', (event.target as HTMLInputElement).value ?? '')
        "
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  valorInput: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['atualizar:valorInput'])

const labelAcima = ref(false)
const emFoco = ref(false)

const lidarFocusInInput = (valor: string) => {
  emFoco.value = true
  if (valor !== '') {
    return
  }

  labelAcima.value = true
}

const lidarFocusOutInput = (valor: string) => {
  emFoco.value = false
  if (valor !== '') {
    return
  }

  labelAcima.value = false
}
</script>

<style scoped>
input {
  @apply z-10 p-1.5 rounded-md border transition-all border-zinc-200 dark:border-zinc-700 dark:bg-neutral-800;
  @apply focus:shadow-md focus:border-zinc-400;
  @apply hover:border-zinc-500 hover:bg-slate-100 dark:hover:border-zinc-500 dark:hover:bg-neutral-700;
}
</style>
