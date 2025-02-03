<template>
  <BaseInput type="password" :label="props.label" v-model="value" />
</template>

<script setup lang="ts">
import BaseInput from '@/components/BaseInput.vue'
import { type ModelRef, onMounted } from 'vue'

const value: ModelRef<undefined, string> = defineModel()

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

onMounted(() => {
  const passwordInput: HTMLElement | null = document.getElementById(props.label)
  passwordInput?.setAttribute('autocomplete', 'current-password')
})
</script>

<style scoped></style>
