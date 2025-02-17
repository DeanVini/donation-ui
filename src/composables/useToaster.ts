import { useToastStore } from '@/stores/useToastStore'

export const useToaster = () => {
  const toastStore = useToastStore()

  const error = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'error')
  }

  const success = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'success')
  }

  const alert = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'alert')
  }

  const info = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'info')
  }

  const contrast = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'contrast')
  }

  const neutral = (title: string = '', message: string) => {
    toastStore.addToast({ title, text: message }, 'neutral')
  }

  return { error, success, alert, info, contrast, neutral }
}
