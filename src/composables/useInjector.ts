import { ref } from 'vue'
import { axiosInstance } from '@/services/axiosInstance'

export const useInjector = () => {
  const method = ref('GET')
  const route = ref('')
  const params = ref({})
  const data = ref({})
  const headersOption = ref({})

  const BASE_URL = import.meta.env.VITE_API_HOST
  const token = localStorage.getItem('token')

  if (token) {
    headersOption.value = {
      Authorization: `Bearer ${token}`,
    }
  }
  return {
    get: function () {
      method.value = 'GET'
      return this
    },
    post: function () {
      method.value = 'POST'
      return this
    },
    put: function () {
      method.value = 'PUT'
      return this
    },
    patch: function () {
      method.value = 'PATCH'
      return this
    },
    delete: function () {
      method.value = 'DELETE'
      return this
    },
    setMethod: function (newMethod: string) {
      method.value = newMethod
      return this
    },
    setRoute: function (newRoute: string) {
      route.value = newRoute
      return this
    },
    setParams: function (newParams: object) {
      params.value = newParams
      return this
    },
    setData: function (newData: object) {
      data.value = newData
      return this
    },
    setHeadersOption: function (newHeadersOption: object) {
      headersOption.value = newHeadersOption
      return this
    },
    execute: async function () {
      try {
        const response = await axiosInstance(
          `${BASE_URL}/${route.value}`,
          method.value,
          data.value,
          params.value,
          headersOption.value,
        )
        return response.data
      } catch (error: any) {
        throw error.response ?? error
      }
    },
  }
}
