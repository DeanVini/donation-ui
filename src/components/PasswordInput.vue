<template>
  <BaseInput
    type="password"
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
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

onMounted(() => {
  const passwordInput: HTMLElement | null = document.getElementById(props.label)
  passwordInput?.setAttribute('autocomplete', 'current-password')
})
</script>

<style scoped></style>
