import Request from '@/utils/request'
import { GameOption } from './types'

interface RequestData {
  country_id?: number
  sport_id?: number
}

interface ResponseData {
  list: GameOption[]
}

export const options = (req?: RequestData) => {
  return Request.post<ResponseData>('sport_game/options', req)
}
