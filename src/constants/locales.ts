import BrazilFlag from '@/components/icons/BrazilFlag.vue'
import UsaFlag from '@/components/icons/UsaFlag.vue'

export default [
  {
    language: 'pt',
    country: 'br',
    name: 'Português',
    icon: BrazilFlag,
  },
  {
    language: 'en',
    name: 'English',
    icon: UsaFlag,
  } as const,
]
