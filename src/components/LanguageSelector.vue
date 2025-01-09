<template></template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LOCALES from '@/constants/locales'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>
