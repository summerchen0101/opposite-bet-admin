import Request from '@/utils/request'
import { SportGameOptions } from './types'

interface ResponseData {
  list: SportGameOptions[]
}

export const options = () => Request.get<ResponseData>('sport_game/options')
