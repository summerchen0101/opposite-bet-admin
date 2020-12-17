import Request from '@/utils/request'
import { SearchFields, User } from './types'

export interface Response {
  users: User[]
  total_count: number
  total_page: number
}

interface Request extends SearchFields {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('admin_user/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
