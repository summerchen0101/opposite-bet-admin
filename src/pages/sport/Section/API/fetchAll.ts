import Request from '@/utils/request'
import { Section } from './types'

export interface Response {
  list: Section[]
  total_count: number
  total_page: number
}

interface Request {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('sport_section/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
