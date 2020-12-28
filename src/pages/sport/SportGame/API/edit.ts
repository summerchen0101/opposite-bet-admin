import Request from '@/utils/request'
import { EditSportGame } from './types'

export const edit = (reqData: EditSportGame) =>
  Request.post<null>('sport_game/edit', reqData)
