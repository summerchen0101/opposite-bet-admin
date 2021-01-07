import Request from '@/utils/request'
import { News, SearchFields } from './types'

export interface Response {
  list: News[]
  total_count: number
  total_page: number
}

interface Request extends SearchFields {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('news/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
