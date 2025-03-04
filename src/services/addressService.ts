import type { Address, AddressInput } from '@/interfaces/addressInterface'
import { useInjector } from '@/composables/useInjector'

export default function useAddressService() {
  const baseRoute = 'address/'
  const getAll = async (): Promise<Address[]> => {
    return await useInjector().get().setRoute(baseRoute).execute()
  }

  const getById = async (id: number): Promise<Address> => {
    return await useInjector().get().setRoute(`${baseRoute}${id}`).execute()
  }

  const postAddress = async (data: AddressInput): Promise<Address[]> => {
    return await useInjector().post().setRoute(baseRoute).setData(data).execute()
  }

  return { getAll, postAddress, getById }
}
