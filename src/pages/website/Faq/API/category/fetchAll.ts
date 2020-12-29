import Request from '@/utils/request'
import { FaqCategory } from './types'

export interface Response {
  list: FaqCategory[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('qa_catalogue/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
