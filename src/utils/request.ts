import { ResponseBase } from '@/types'
import Axios, { AxiosRequestConfig } from 'axios'
import errCodes from '@/lib/errCodes'

const config: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: '/api',
}

export const get = function <T>(
  url: string,
  params = null,
): Promise<ResponseBase<T>> {
  return Axios.get(url, { ...config, params })
}
export const post = async function <T>(
  url: string,
  data = null,
): Promise<ResponseBase<T>> {
  const res = await Axios.post<ResponseBase<T>>(url, data, config)
  if (res.data.code !== 0) {
    throw new Error(errCodes[res.data.code] || 'Error occur!')
  }
  return res.data
}
export default {
  get,
  post,
}
