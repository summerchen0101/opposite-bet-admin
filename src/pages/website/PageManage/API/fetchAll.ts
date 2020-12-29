import Request from '@/utils/request'
import { Page, SearchFields } from './types'

export interface Response {
  list: Page[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('page/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
