import Request from '@/utils/request'
import { MemberTag, SearchFields } from './types'

export interface Response {
  list: MemberTag[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('member_tag/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
