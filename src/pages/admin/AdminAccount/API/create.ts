import Request from '@/utils/request'
import { ResponseTableItemSchema } from './types'

interface ResponseData {
  [key: string]: any
}

type RequestData = ResponseTableItemSchema

export const create = (reqData: RequestData) =>
  Request.post<ResponseData>('admin/editAdmin', reqData)
