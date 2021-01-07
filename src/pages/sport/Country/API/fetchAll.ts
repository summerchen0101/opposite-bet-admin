import Request from '@/utils/request'
import { Country } from './types'

export interface Response {
  list: Country[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('country/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
