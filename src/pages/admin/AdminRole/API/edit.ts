import Request from '@/utils/request'
interface ResponseData {
  [key: string]: any
}

interface RequestData {
  role_name: string
  menu_data: string // JSON string
}

export const edit = (role_id: string, reqData: RequestData) =>
  Request.post<ResponseData>('admin/editAdmin', { role_id, ...reqData })
