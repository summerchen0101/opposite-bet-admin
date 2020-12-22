import Request from '@/utils/request'
import { Activity, SearchFields } from './types'

export interface Response {
  activities: Activity[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('activity/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })