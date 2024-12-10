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
</script>

<style scoped></style>
