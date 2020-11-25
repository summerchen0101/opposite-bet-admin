import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchById = (id: string) =>
  Request.post<ResponseData>('admin/getAdminList', { id })
