import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useRouterStore = defineStore('route', () => {
  const currentRoute = reactive({
    fullPath: '',
    basePath: '',
  })

  const setBasePath = (path: string) => {
    const splitPath = path.split('/')
    currentRoute.basePath = '/' + splitPath[1]
  }

  const setCurrentRoute = (path: string) => {
    currentRoute.fullPath = path
    setBasePath(path)
  }

  return { currentRoute, setCurrentRoute }
})
