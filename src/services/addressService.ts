import type { Address, AddressInput } from '@/interfaces/AddressInterface'
import { useInjector } from '@/composables/useInjector'
import type { AddressParams } from '@/interfaces/AddressParamsInterface'

export default function useAddressService() {
  const baseRoute = 'address/'
  const getAll = async (): Promise<Address[]> => {
    return await useInjector().get().setRoute(baseRoute).execute()
  }

  const getById = async (id: number, params: AddressParams): Promise<Address> => {
    return await useInjector().get().setRoute(`${baseRoute}${id}`).setParams(params).execute()
  }

  const postAddress = async (data: AddressInput): Promise<Address[]> => {
    return await useInjector().post().setRoute(baseRoute).setData(data).execute()
  }

  return { getAll, postAddress, getById }
}
