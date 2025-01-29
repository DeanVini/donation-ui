import type { Address } from '@/interfaces/addressInterface'
import { useInjector } from '@/composables/useInjector'

export default function useAddressService() {
  const baseRoute = 'address/'
  const getAll = async (): Promise<Address[]> => {
    return useInjector().get().setRoute(baseRoute).execute()
  }

  return { getAll }
}
