<template>
  <VueApexCharts
    :key="familyProgress"
    type="area"
    height="100%"
    :xaxis="{
      categories: getCategories(),
    }"
    width="100%"
    :options="{
      chart: {
        id: 'progress-chart',
      },
      xaxis: { categories: getCategories() },
      tooltip: {
        custom: (chartData: ChartData) => createChartTooltip(chartData),
      },
    }"
    :series="getSeries()"
  ></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'

const { t, locale } = useI18n()

interface ChartData {
  series: any[]
  seriesIndex: any
  dataPointIndex: any
}

//Mocked Data, this will be replaced by the API
const familyProgress = ref([
  { month: t('january'), score: 50 },
  { month: t('february'), score: 55 },
  { month: t('march'), score: 60 },
  { month: t('april'), score: 58 },
  { month: t('may'), score: 65 },
  { month: t('june'), score: 70 },
])

// This logic will be replaced by the API
const createChartTooltip = (chartData: ChartData) => {
  const { series, seriesIndex, dataPointIndex } = chartData
  const currentValue: number = series[seriesIndex][dataPointIndex]
  console.log({ series, seriesIndex, dataPointIndex })
  if (dataPointIndex === 0) {
    return `<div class="apexcharts-tooltip">
                  <span>Pontuação: ${currentValue}</span>
                </div>`
  } else {
    const previousValue: number = series[seriesIndex][dataPointIndex - 1]
    const change: number = ((currentValue - previousValue) / previousValue) * 100
    const status: string = change > 0 ? 'Melhorou' : 'Piorou'
    return `<div class="apexcharts-tooltip">
                  <span>Pontuação: ${currentValue}</span><br>
                  <span>${status} ${Math.abs(Number.parseFloat(change.toFixed(2)))}% desde o último mês</span>
                </div>`
  }
}

const getSeries = () => {
  return [
    {
      name: t('punctuation'),
      data: getScore(),
    },
  ]
}

const getScore = () => {
  return familyProgress.value.map((item) => item.score)
}

const getCategories = () => {
  return familyProgress.value.map((item) => item.month)
}

watch(locale, () => {
  familyProgress.value = [
    { month: t('january'), score: 50 },
    { month: t('february'), score: 55 },
    { month: t('march'), score: 60 },
    { month: t('april'), score: 58 },
    { month: t('may'), score: 65 },
    { month: t('june'), score: 70 },
  ]
})
</script>

<style scoped>
.apexcharts-tooltip {
  padding: 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
