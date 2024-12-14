<template>
  <button
    :class="{
      'hover:brightness-110 ': props.tipo === 'solido',
      'dark:!bg-transparent hover:brightness-95 ': props.tipo === 'leve',
    }"
    class="p-1 rounded-md border bg-opacity-20 ease-in-out duration-300 hover:-translate-y-[3px] hover:shadow-md"
    :style="getEstiloBotao()"
    @mouseover="corPrincipal = 'black'"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
// @ts-ignore
import tailwindConfig from '../../tailwind.config'
import colors from 'tailwindcss/colors'
import { computed, onMounted, type PropType, ref } from 'vue'
import type { CorTailwind, IntensidadesTailwind } from '@/constants/tailwind'
import { CORES_TAILWIND } from '@/constants/tailwind'

const props = defineProps({
  cor: {
    type: String as PropType<(typeof CORES_TAILWIND)[number]>,
    default: 'mantis',
  },
  tipo: {
    type: String as PropType<'solido' | 'leve'>,
    default: 'solido',
  },
  intencidadePrincipal: {
    type: Number as PropType<IntensidadesTailwind>,
    default: null,
  },
  intencidadeSecundaria: {
    type: Number as PropType<IntensidadesTailwind>,
    default: null,
  },
})

const coresTailwindPersonalizadas = computed(() => tailwindConfig.theme.extend?.colors)
const corTexto = ref('')
const corPrincipalAtual = ref(null)
const corSecundariaAtual = ref(null)
const corPrincipal = ref('')
const corSecundaria = ref('')

const getEstiloBotao = () => {
  corPrincipal.value = corPrincipalAtual.value ?? getCorPrincipal(props.cor)
  corSecundaria.value = corSecundariaAtual.value ?? getCorSecundaria(props.cor)

  return `background-color: ${hexToRgba(corPrincipal.value, 75)}; color: ${hexToRgba(corTexto.value, 4)}; border-color: ${hexToRgba(corSecundaria.value)};`
}

const getCorPrincipal = (corTailwind: string) => {
  const intensidadePadrao = props.tipo === 'solido' ? 500 : 100
  const intensidadeCor = props.intencidadePrincipal ?? intensidadePadrao
  const corPrincipal =
    coresTailwindPersonalizadas.value[corTailwind]?.[intensidadeCor] ??
    (colors as Record<string, any>)[corTailwind]?.[intensidadeCor]

  if (intensidadeCor === 'transparente') {
    corTexto.value = getCorSecundaria(corTailwind)
    return 'transparent'
  }

  corTexto.value = intensidadeCor >= 400 ? colors['white'] : getCorSecundaria(corTailwind)
  return corPrincipal
}

const getCorSecundaria = (corTailwind: string) => {
  const intensidadeCor = props.intencidadeSecundaria ?? 500
  return (
    coresTailwindPersonalizadas.value[corTailwind]?.[intensidadeCor] ??
    (colors as Record<string, any>)[corTailwind]?.[intensidadeCor]
  )
}

function hexToRgba(hex: string, alpha: number = 1) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
</script>

<style scoped></style>
