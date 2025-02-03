import { useMutation, type UseMutationReturnType, useQueryClient } from '@tanstack/vue-query'
import type { Address, AddressInput } from '@/interfaces/addressInterface'
import useAddressService from '@/services/addressService'
import { updateQueryData } from '@/services/cacheHelpers'

const queryClient = useQueryClient()

export function useAddressMutation() {
  const postAddress = (): UseMutationReturnType<Address[], Error, AddressInput, unknown> => {
    return useMutation({
      mutationFn: (addressData: AddressInput) => useAddressService().postAddress(addressData),
      onSuccess: (data: Address[]) => {
        updateQueryData(['addresses'], data)
      },
    })
  }

  return { postAddress }
}
