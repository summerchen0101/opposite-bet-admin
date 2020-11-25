import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchById = (role_id: string) =>
  Request.post<ResponseData>('admin/getAdminRoles', { method: 'EDIT', role_id })
