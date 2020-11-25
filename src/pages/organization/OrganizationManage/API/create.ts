import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}
interface RequestData {
  [key: string]: any
}

export const create = (reqData: RequestData) =>
  Request.post<ResponseData>('admin/storeAgent', { method: 'ADD', ...reqData })
