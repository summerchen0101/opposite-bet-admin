import Request from '@/utils/request'
import { Play } from './types'

export interface Response {
  list: Play[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('sport_play/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
