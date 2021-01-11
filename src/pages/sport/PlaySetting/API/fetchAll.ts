import Request from '@/utils/request'
import { PlaySetting, SearchFields } from './types'

export interface Response {
  list: PlaySetting[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: SearchFields) =>
  Request.post<Response>('opposite_odds/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
