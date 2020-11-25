import Request from '@/utils/request'
import { RequestCreateData } from './types'

interface ResponseData {
  [key: string]: any
}

export const create = (reqData: RequestCreateData) =>
  Request.post<ResponseData>('admin/editAdmin', reqData)
