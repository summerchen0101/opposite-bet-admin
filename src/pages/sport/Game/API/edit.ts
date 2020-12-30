import Request from '@/utils/request'
import { EditGame } from './types'

export const edit = (reqData: EditGame) =>
  Request.post<null>('sport_game/edit', reqData)
