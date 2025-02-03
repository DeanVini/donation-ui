<template>
  <button
    :class="{
      '!bg-neutral-500/50 !text-neutral-200 !border-neutral-500/50 hover:!-translate-y-[0px] hover:!brightness-100 !cursor-not-allowed':
        props.disabled,
      'hover:brightness-110 ': props.type === 'solid',
      'dark:!bg-transparent hover:brightness-95 ': props.type === 'light',
    }"
    class="p-1 rounded-md border bg-opacity-20 ease-in-out duration-300 hover:-translate-y-[3px] hover:shadow-md px-2"
    :style="getButtonStyle()"
    @mouseover="mainColor = 'black'"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import tailwindConfig from '../../tailwind.config'
import colors from 'tailwindcss/colors'
import { computed, type PropType, ref } from 'vue'
import type { TailwindIntensities } from '@/constants/tailwind'
import { TAILWIND_COLORS } from '@/constants/tailwind'

const props = defineProps({
  color: {
    type: String as PropType<(typeof TAILWIND_COLORS)[number]>,
    default: 'mantis',
  },
  type: {
    type: String as PropType<'solid' | 'light'>,
    default: 'solid',
  },
  mainIntensity: {
    type: Number as PropType<TailwindIntensities>,
    default: null,
  },
  secondaryIntensity: {
    type: Number as PropType<TailwindIntensities>,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const customTailwindColors = computed(() => tailwindConfig.theme.extend?.colors)
const textColor = ref('')
const mainColorAtual = ref(null)
const currentSecondaryColor = ref(null)
const mainColor = ref('')
const secondaryColor = ref('')

const getButtonStyle = () => {
  mainColor.value = mainColorAtual.value ?? getCorPrincipal(props.color)
  secondaryColor.value = currentSecondaryColor.value ?? getSecondaryColor(props.color)

  return `background-color: ${hexToRgba(mainColor.value, 75)}; color: ${hexToRgba(textColor.value, 4)}; border-color: ${hexToRgba(secondaryColor.value)};`
}

const getCorPrincipal = (tailwindColor: string) => {
  const intensidadePadrao = props.type === 'solid' ? 500 : 100
  const colorIntensity = props.mainIntensity ?? intensidadePadrao
  const mainColor =
    customTailwindColors.value[tailwindColor]?.[colorIntensity] ??
    (colors as Record<string, any>)[tailwindColor]?.[colorIntensity]

  if (colorIntensity === 'transparent') {
    textColor.value = getSecondaryColor(tailwindColor)
    return 'transparent'
  }

  textColor.value = colorIntensity >= 400 ? colors['white'] : getSecondaryColor(tailwindColor)
  return mainColor
}

const getSecondaryColor = (tailwindColor: string) => {
  const colorIntensity = props.secondaryIntensity ?? 500
  return (
    customTailwindColors.value[tailwindColor]?.[colorIntensity] ??
    (colors as Record<string, any>)[tailwindColor]?.[colorIntensity]
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
