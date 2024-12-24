// @ts-ignore
import tailwindConfig from '../../tailwind.config'
import colors from 'tailwindcss/colors'

const customColors = tailwindConfig.theme?.extend?.colors ?? {}
const defaultColorKeys = Object.keys(colors)
const customColorKeys = Object.keys(customColors)

export const TAILWIND_COLORS = [...defaultColorKeys, ...customColorKeys] as const
export const TAILWIND_INTENSITIES = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950,
  'transparent',
] as const

export type TailwindColor = (typeof TAILWIND_COLORS)[number]
export type TailwindIntensities = (typeof TAILWIND_INTENSITIES)[number]
