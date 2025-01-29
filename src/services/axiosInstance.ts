import axios from 'axios'

export async function axiosInstance(
  url: string,
  method: string,
  data: object = {},
  params: object = {},
  headers: object = {},
) {
  try {
    return await axios({
      method: method,
      url: url,
      data: data,
      params: params,
      headers: headers,
    })
  } catch (error: any) {
    throw error.response ?? error
  }
}
