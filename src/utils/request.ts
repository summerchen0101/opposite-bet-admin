import { ResponseBase } from '@/lib/types'
import Axios, { AxiosRequestConfig } from 'axios'
import errCodes from '@/lib/errCodes'
import { message } from 'antd'
import httpStatus from 'http-status'
console.log(process.env.API_DOMAIN)
const config: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: process.env.API_DOMAIN,
  validateStatus: (status) => {
    // if (status === 401) {
    //   message.error('請重新登入')
    // }
    return true
  },
}

Axios.interceptors.response.use((res) => {
  if (res.data.code !== 0) {
    throw new Error(
      errCodes[res.data.code] || httpStatus[res.status] || 'Error occur!',
    )
  }
  return res.data
})

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
  return Axios.post(url, data, config)
}
export default {
  get,
  post,
}
