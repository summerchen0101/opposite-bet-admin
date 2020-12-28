import Request from '@/utils/request'
import { CreatePlay } from './types'

export const create = (reqData: CreatePlay) =>
  Request.post<null>('sport_play/add', reqData)
