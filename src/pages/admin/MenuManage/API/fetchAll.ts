import Request from '@/utils/request'
import { Role } from './types'

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
  Request.post<Response>('admin_menu/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
