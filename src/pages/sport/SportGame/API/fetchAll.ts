import Request from '@/utils/request'
import { SportGame, SportGameSearch } from './types'

export interface Response {
  list: SportGame[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: SportGameSearch) =>
  Request.post<Response>('sport_game/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
