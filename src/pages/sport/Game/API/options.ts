import Request from '@/utils/request'
import { GameOption } from './types'

interface ResponseData {
  list: GameOption[]
}

export const options = () => Request.get<ResponseData>('sport_game/options')
