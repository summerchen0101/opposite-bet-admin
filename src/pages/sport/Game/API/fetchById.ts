import Request from '@/utils/request'
import { Game } from './types'

export const fetchById = (id: number) =>
  Request.get<Game>(`sport_game/view/${id}`)
