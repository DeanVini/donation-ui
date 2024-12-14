// @ts-ignore
import tailwindConfig from '../../tailwind.config'
import colors from 'tailwindcss/colors'

const coresPersonalizadas = tailwindConfig.theme?.extend?.colors ?? {}
const chavesCoresPadrao = Object.keys(colors)
const chavesCoresPersonalizadas = Object.keys(coresPersonalizadas)

export const CORES_TAILWIND = [...chavesCoresPadrao, ...chavesCoresPersonalizadas] as const
export const INTENSIDADES_TAILWIND = [
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
  'transparente',
] as const

export type CorTailwind = (typeof CORES_TAILWIND)[number]
export type IntensidadesTailwind = (typeof INTENSIDADES_TAILWIND)[number]
