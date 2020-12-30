import Request from '@/utils/request'
import { LeagueOption } from './types'

interface RequestData {
  game_id: number
}

interface ResponseData {
  list: LeagueOption[]
}

export const options = (req: RequestData) => {
  return Request.post<ResponseData>('sport_league/options', req)
}
