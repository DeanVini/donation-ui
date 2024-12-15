<template>
  <div
    :class="classeCorTailwind[props.tipo]"
    class="flex gap-1 p-1 px-2 rounded-lg border shadow-md"
  >
    <component strokeWidth="1.1" v-if="props.icone" :is="props.icone" />
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  tipo: {
    type: String as PropType<'erro' | 'info' | 'sucesso' | 'alerta' | 'contraste' | 'neutro'>,
    default: 'contraste',
  },
  icone: {
    type: Object as PropType<Record<string, string>>,
    default: null,
  },
})

const classeCorTailwind = {
  erro: 'bg-coral-red-500 text-coral-red-700 border-coral-red-500 shadow-coral-red-500/10 border-opacity-50 bg-opacity-10',
  sucesso:
    'bg-spring-green-500 text-spring-green-600 border-spring-green-600/20 shadow-spring-green-500/10 border-opacity-50 bg-opacity-10',
  info: 'bg-blue-500 text-blue-600 border-blue-600 shadow-blue-500/10 border-opacity-50 bg-opacity-10',
  alerta:
    'bg-broom-500 text-broom-700  border-broom-600 shadow-broom-500/10 border-opacity-50 bg-opacity-10',
  contraste:
    'bg-neutral-900 text-neutral-200 border-neutral-900 dark:bg-gray-200 dark-border-gray-200 dark:text-neutral-900',
  neutro:
    'bg-neutral-500 text-light-blue-700 border-neutral-500/20 shadow-neutral-500/10 bg-opacity-10',
} as const
</script>

<style scoped></style>
