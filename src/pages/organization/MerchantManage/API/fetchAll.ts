import Request from '@/utils/request'
import { Merchant, SearchFields } from './types'

export interface Response {
  list: Merchant[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('ip_block/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
