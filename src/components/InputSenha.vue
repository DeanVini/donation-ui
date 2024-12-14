<template>
  <InputBase
    type="password"
    :label="props.label"
    :valor-input="props.valorInput"
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
  valorInput: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['atualizar:valorInput'])

onMounted(() => {
  const inputSenha: HTMLElement | null = document.getElementById(props.label)
  inputSenha?.setAttribute('autocomplete', 'current-password')
})
</script>

<style scoped></style>
