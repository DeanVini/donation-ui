import { useMutation, useQuery } from '@tanstack/vue-query'
import useAddressService from '@/services/addressService'
import type { UseQueryReturnType } from '@tanstack/vue-query'
import type { Address } from '@/interfaces/addressInterface'

export default function useAddressQuery() {
  const getAll = (): UseQueryReturnType<Address[], Error> => {
    return useQuery({
      queryKey: ['addresses'],
      queryFn: useAddressService().getAll,
    })
  }

  return { getAll }
}
