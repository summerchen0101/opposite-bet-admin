import Request from '@/utils/request'
import { News } from './types'

export interface Response {
  news: News[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('news/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
