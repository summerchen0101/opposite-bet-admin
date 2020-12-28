import Request from '@/utils/request'
import { CreateTeam } from './types'

export const create = (reqData: CreateTeam) =>
  Request.post<null>('sport_team/add', reqData)
