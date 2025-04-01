// import { useQueryClient } from '@tanstack/vue-query'

// const queryClient = useQueryClient()
import type { Address } from '@/interfaces/AddressInterface'

export const updateQueryData = (key: Array<string | object>, data: Address[]) => {
  // const oldData: Array<never> | undefined = queryClient.getQueryData(key)
  // if (oldData === undefined) return
  // queryClient.setQueryData(key, oldData.push(data))
}
