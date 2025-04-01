import type { ApexOptions } from 'apexcharts'

const defaultOptions: ApexOptions = {
  theme: {
    mode: 'dark',
    palette: 'palette1',
    monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },

  chart: {
    toolbar: {
      show: false,
    },
  },
}

export const getChartOptions = (customOptions: ApexOptions = {}): ApexOptions => {
  return {
    ...defaultOptions,
    ...customOptions,
    chart: {
      ...defaultOptions.chart,
      ...customOptions.chart,
    },
    theme: {
      ...defaultOptions.theme,
      ...customOptions.theme,
    },
  }
}
