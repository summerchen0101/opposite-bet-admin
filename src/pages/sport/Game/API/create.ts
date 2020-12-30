import Request from '@/utils/request'
import { CreateGame } from './types'

export const create = (reqData: CreateGame) =>
  Request.post<null>('sport_game/add', reqData)
