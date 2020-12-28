import Request from '@/utils/request'
import { Message, SearchFields } from './types'

export interface Response {
  inbox_messages: Message[]
  total_count: number
  total_page: number
}

interface Request extends SearchFields {
  page?: number
  perpage?: number
}
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('inbox_message/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
