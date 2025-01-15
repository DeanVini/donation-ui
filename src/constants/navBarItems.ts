import { FileUser, House } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
export const NAV_ITENS = [
  {
    label: 'Home',
    link: '/',
    icon: House,
  },
  {
    label: t('people'),
    link: '/person',
    icon: FileUser,
  },
] as const
