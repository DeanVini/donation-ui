<template>
  <BaseInput
    type="text"
    :label="props.label"
    :model-value="props.modelValue"
    @update:model-value="(valor: string) => emit('update:modelValue', valor)"
  />
</template>

<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
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
  modelValue: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

onMounted(() => {
  if (props.autocomplete) {
    const textInput: HTMLElement | null = document.getElementById(props.label)
    textInput?.setAttribute('autocomplete', props.autocomplete)
  }
})
</script>

<style scoped></style>
