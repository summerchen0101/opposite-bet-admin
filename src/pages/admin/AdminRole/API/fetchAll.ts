import Request from '@/utils/request'
import { Role } from './types'

export interface Response {
  list: Role[]
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
    perpage: 50,
    ...reqData,
  })
