import { useMutation, useQuery } from '@tanstack/vue-query'
import useAddressService from '@/services/addressService'
import type { UseQueryReturnType } from '@tanstack/vue-query'
import type { Address } from '@/interfaces/AddressInterface'
import type { AddressParams } from '@/interfaces/AddressParamsInterface'

export default function useAddressQuery() {
  const getAll = (): UseQueryReturnType<Address[], Error> => {
    return useQuery({
      queryKey: ['addresses'],
      queryFn: useAddressService().getAll,
    })
  }

  const getById = (id: number, params: AddressParams): UseQueryReturnType<Address, Error> => {
    return useQuery({
      queryKey: ['addresses'],
      queryFn: () => useAddressService().getById(id, params),
    })
  }

  return { getAll, getById }
}
