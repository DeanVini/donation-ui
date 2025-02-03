import { useQueryClient } from '@tanstack/vue-query'

const queryClient = useQueryClient()

export const updateQueryData = (key: Array<string | object>, data: any) => {
  const oldData: Array<any> | undefined = queryClient.getQueryData(key)
  if (oldData === undefined) return
  queryClient.setQueryData(key, oldData.push(data))
}
