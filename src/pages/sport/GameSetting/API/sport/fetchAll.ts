import Request from '@/utils/request'
import { Sport, SearchFields } from './types'

export interface Response {
  activities: Sport[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('sport/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
