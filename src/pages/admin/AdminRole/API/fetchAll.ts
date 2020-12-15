import Request from '@/utils/request'

interface Permission {
  id: number
  name: string
  route: string
}
export interface Role {
  created_at: number
  id: number
  is_active: boolean
  name: string
  permissions: Permission[]
  updated_at: number
}
export interface Response {
  roles: Role[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('admin_role/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
