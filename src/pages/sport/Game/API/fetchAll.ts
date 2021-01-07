import Request from '@/utils/request'
import { Game, GameSearch } from './types'

export interface Response {
  list: Game[]
  total_count: number
  total_page: number
}

export const fetchAll = (reqData?: GameSearch) =>
  Request.post<Response>('sport_game/list', {
    page: 1,
    perpage: 50,
    ...reqData,
  })
