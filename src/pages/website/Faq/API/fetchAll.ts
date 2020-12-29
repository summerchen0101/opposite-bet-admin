import Request from '@/utils/request'
import { Faq } from './types'

export interface Response {
  list: Faq[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('qa/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
