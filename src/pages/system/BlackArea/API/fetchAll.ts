import Request from '@/utils/request'
import { BlackArea, SearchFields } from './types'

export interface Response {
  list: BlackArea[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('country_ip_block/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
