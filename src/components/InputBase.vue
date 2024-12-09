<template>
  <div class="w-fit">
    <label for="input" class="relative h-full">
      <span
        :class="{ 'translate-y-[-90%] translate-x-[-7px]': labelAcima }"
        class="absolute ml-1 text-zinc-500 p-1 w-full transition-all h-max flex items-center pointer-events-none h-full"
      >
        {{ props.label }}
      </span>
      <input
        class="z-10 focus:shadow-md focus:border-slate-200 p-1.5 rounded-md border hover:border-zinc-500 transition-all border-zinc-700 bg-slate-100 dark:bg-neutral-800 hover:bg-neutral-700"
        v-model="props.valorInput"
        :id="props.label"
        :type="props.type"
        @focusin="({ target }) => lidarFocusInInput(target?.value)"
        @focusout="({ target }) => lidarFocusOutInput(target?.value)"
        @input="({ target }) => emit('atualizar:valorInput', lidarAtualizacaoInput(target?.value))"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const lidarFocusInInput = (valor: string) => {
  if (valor !== '') {
    return
  }

  labelAcima.value = true
}

const lidarFocusOutInput = (valor: string) => {
  if (valor !== '') {
    return
  }

  labelAcima.value = false
}

const lidarAtualizacaoInput = (valor: string) => {
  if (valor === '') {
    labelAcima.value = false
  }
  labelAcima.value = true
  emit('atualizar:valorInput', props.valorInput)
}
</script>

<style scoped></style>
