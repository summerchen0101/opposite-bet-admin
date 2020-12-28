import Request from '@/utils/request'
import { League } from './types'

export const fetchById = (id: number) =>
  Request.get<League>(`sport_league/view/${id}`)
