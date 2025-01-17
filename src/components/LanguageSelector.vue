<template>
  <DropdownContainer class="flex items-center">
    <template #activator>
      <div class="flex items-center">
        <component :is="getLocaleIcon(locale)" size="25" />
      </div>
    </template>
    <template #content>
      <div class="flex gap-2">
        <button
          v-for="lang in LOCALES"
          :key="lang.language"
          class="transition duration-150 ease-in-out hover:scale-110"
          @click="changeLanguage(lang.language)"
        >
          <component class="h-full" size="25" :is="lang.icon" />
        </button>
      </div>
    </template>
  </DropdownContainer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LOCALES from '@/constants/locales'
import DropdownContainer from '@/components/DropdownContainer.vue'

const { locale } = useI18n()

const getLocaleIcon = (locale: string) => {
  LOCALES.find((item) => {
    return item.language === locale
  })
  return LOCALES.find((item) => item.language === locale)?.icon
}

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>
