import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

interface RequestData {
  role_name: string
  menu_data: string // JSON string
}

export const create = (reqData: RequestData) =>
  Request.post<ResponseData>('admin_role/add', reqData)
