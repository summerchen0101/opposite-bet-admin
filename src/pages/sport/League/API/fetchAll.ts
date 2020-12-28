import Request from '@/utils/request'
import { League, LeagueSearch } from './types'

export interface Response {
  leagues: League[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: LeagueSearch) =>
  Request.post<Response>('sport_league/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
