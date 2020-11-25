import Request from '@/utils/request'
import { RequestEditData } from './types'
interface ResponseData {
  [key: string]: any
}

export const edit = (id: string, reqData: RequestEditData) =>
  Request.post<ResponseData>('admin/editAdmin', { id, ...reqData })
