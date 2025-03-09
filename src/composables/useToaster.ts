import { useToastStore } from '@/stores/useToastStore'

export const useToaster = () => {
  const toastStore = useToastStore()

  const error = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'error')
  }

  const success = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'success')
  }

  const alert = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'alert')
  }

  const info = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'info')
  }

  const contrast = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'contrast')
  }

  const neutral = (message: string, title?: string) => {
    toastStore.addToast({ title, text: message }, 'neutral')
  }

  return { error, success, alert, info, contrast, neutral }
}
