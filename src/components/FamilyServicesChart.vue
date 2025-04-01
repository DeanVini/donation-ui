<template>
  <VueApexCharts
    width="100%"
    height="100%"
    type="bar"
    :options="{ xaxis: { categories: ['Alimentação', 'Saúde', 'Educação'] } }"
    :series="[{ name: 'Serviços', data: [5, 3, 2] }]"
  ></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
</script>

<style scoped></style>
