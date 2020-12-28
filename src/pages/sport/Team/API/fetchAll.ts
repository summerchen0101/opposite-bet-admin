import Request from '@/utils/request'
import { Team, TeamSearch } from './types'

export interface Response {
  list: Team[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: TeamSearch) =>
  Request.post<Response>('sport_team/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
