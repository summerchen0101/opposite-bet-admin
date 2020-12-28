import Request from '@/utils/request'
import { CreateSportGame } from './types'

export const create = (reqData: CreateSportGame) =>
  Request.post<null>('sport_game/add', reqData)
