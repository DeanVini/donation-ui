import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import i18n from '@/i18n'
import VueApexCharts from 'vue3-apexcharts'
import { getChartOptions } from './utils/apexcharts-config'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)
app.use(i18n)
app.use(VueApexCharts)
app.provide('getChartOptions', getChartOptions)
app.mount('#app')
