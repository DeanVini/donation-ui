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
    country: 'usa',
    name: 'English',
    icon: UsaFlag,
  },
] as const
