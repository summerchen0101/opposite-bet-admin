import Request from '@/utils/request'
import { PlayOption } from './types'

interface ResponseData {
  list: PlayOption[]
}

export const options = () => Request.get<ResponseData>('sport_play/options')
