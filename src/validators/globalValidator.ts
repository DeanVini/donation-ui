import { defineRule } from 'vee-validate'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineRule('required', (value: string | number | Array<any> | object) => {
  if (!value || typeof value !== 'string' || value?.length === 0) {
    return 'This field is required'
  }
  return true
})

defineRule('email', (value: string) => {
  if (!value || value.length === 0) {
    return true
  }
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return 'This field must be a valid email'
  }
  return true
})
