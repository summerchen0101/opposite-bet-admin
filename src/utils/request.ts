import { ResponseBase } from '@/types'
import Axios from 'axios'
import errCodes from '@/lib/errCodes'

const baseUrl = `http://${process.env.API_DOMAIN}`
const bashPath = 'api/v1'

const createUrl = (url) => `${baseUrl}/${bashPath}/${url}`

const config = {
  withCredentials: true,
}

export const get = function <T>(
  url: string,
  params = null,
): Promise<ResponseBase<T>> {
  return Axios.get(createUrl(url), { ...config, params })
}
export const post = async function <T>(
  url: string,
  data = null,
): Promise<ResponseBase<T>> {
  const res = await Axios.post<ResponseBase<T>>(createUrl(url), data, config)
  if (res.data.code !== 0) {
    throw new Error(errCodes[res.data.code] || 'Error occur!')
  }
  return res.data
}
export default {
  get,
  post,
}
