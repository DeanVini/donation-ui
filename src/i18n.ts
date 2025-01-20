import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import pt from '@/locales/pt'

const userLocale = navigator.language || navigator.languages[0] || 'en'

const i18n = createI18n({
  legacy: false,
  locale: userLocale.split('-')[0],
  fallbackLocale: 'en',
  messages: {
    en,
    pt,
  },
})

export default i18n
