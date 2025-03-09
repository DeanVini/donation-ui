import { defineStore } from 'pinia'
import type { MessageStatus } from '@/constants/messageStatus'
import { ref } from 'vue'
import { v7 as uuidv7 } from 'uuid'

export interface Toast {
  id: string
  title: string
  text: string
  status: MessageStatus
}

export interface ToastPayload {
  title?: string
  text: string
  timeout?: number
}

const defaultTimeout = 4000

function createToast(title: string = '', text: string, status: MessageStatus): Toast {
  return {
    id: uuidv7(),
    title,
    text,
    status,
  }
}

export const useToastStore = defineStore('toast', () => {
  const activeToasts = ref<Toast[]>([])
  const toastTimeouts = new Map<string, number>()

  function addToast(payload: ToastPayload, status: MessageStatus): void {
    const { title, text, timeout = defaultTimeout } = payload
    const toast = createToast(title, text, status)
    activeToasts.value.push(toast)

    const timerId = window.setTimeout(() => {
      removeToast(toast.id)
    }, timeout)
    toastTimeouts.set(toast.id, timerId)
  }

  function removeToast(id: string): void {
    const timerId = toastTimeouts.get(id)
    if (timerId !== undefined) {
      clearTimeout(timerId)
      toastTimeouts.delete(id)
    }
    activeToasts.value = activeToasts.value.filter((t) => t.id !== id)
  }

  return { activeToasts, addToast, removeToast }
})
