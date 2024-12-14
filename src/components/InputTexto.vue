<template>
  <InputBase
    type="text"
    :label="props.label"
    :valor-input="valorInput"
    @atualizar:valor-input="(valor: string) => emit('atualizar:valorInput', valor)"
  />
</template>

<script setup lang="ts">
import InputBase from '@/components/InputBase.vue'
import { onMounted } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  autocomplete: {
    type: String,
    default: null,
  },
  valorInput: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['atualizar:valorInput'])

onMounted(() => {
  if (props.autocomplete) {
    const inputTexto: HTMLElement | null = document.getElementById(props.label)
    inputTexto?.setAttribute('autocomplete', props.autocomplete)
  }
})
</script>

<style scoped></style>
