import Request from '@/utils/request'
import { Sport, SportSearch } from './types'

export interface Response {
  list: Sport[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: SportSearch) =>
  Request.post<Response>('sport/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
