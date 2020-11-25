import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

interface RequestCreateData {
  role_name: string
  menu_data: string // JSON string
}

export const create = (reqData: RequestCreateData) =>
  Request.post<ResponseData>('admin/editAdmin', reqData)
