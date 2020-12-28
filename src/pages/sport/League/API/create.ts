import Request from '@/utils/request'
import { CreateLeague } from './types'

export const create = (reqData: CreateLeague) =>
  Request.post<null>('sport_league/add', reqData)
