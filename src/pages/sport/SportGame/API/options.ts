import Request from '@/utils/request'
import { SportGameOption } from './types'

interface ResponseData {
  list: SportGameOption[]
}

export const options = () => Request.get<ResponseData>('sport_game/options')
