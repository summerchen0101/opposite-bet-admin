import Request from '@/utils/request'
import { Sport, SportSearch } from './types'

export interface Response {
  sports: Sport[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: SportSearch) =>
  Request.post<Response>('sport/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
