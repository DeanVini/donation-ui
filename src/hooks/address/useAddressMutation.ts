import { useMutation, type UseMutationReturnType } from '@tanstack/vue-query'
import type { Address, AddressInput } from '@/interfaces/AddressInterface'
import useAddressService from '@/services/addressService'
import { updateQueryData } from '@/services/cacheHelpers'

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
