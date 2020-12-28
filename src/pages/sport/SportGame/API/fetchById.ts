import Request from '@/utils/request'
import { SportGame } from './types'

export const fetchById = (id: number) =>
  Request.get<SportGame>(`sport_game/view/${id}`)
