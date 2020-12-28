import Request from '@/utils/request'
import { Team } from './types'

export const fetchById = (id: number) =>
  Request.get<Team>(`sport_team/view/${id}`)
