import Request from '@/utils/request'
import { Banner, SearchFields } from './types'

export interface Response {
  list: Banner[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('banner/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
