import Request from '@/utils/request'
import { Marquee, SearchFields } from './types'

export interface Response {
  news: Marquee[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('marquee/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
