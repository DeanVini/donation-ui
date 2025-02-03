<template>
  <BaseInput v-model="value" type="text" :label="props.label" />
</template>

<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import { type ModelRef, onMounted } from 'vue'

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

const value: ModelRef<undefined, string> = defineModel()

onMounted(() => {
  if (props.autocomplete) {
    const textInput: HTMLElement | null = document.getElementById(props.label)
    textInput?.setAttribute('autocomplete', props.autocomplete)
  }
})
</script>

<style scoped></style>
