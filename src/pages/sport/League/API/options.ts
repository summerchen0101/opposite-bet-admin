import Request from '@/utils/request'
import { LeagueOptions } from './types'

interface ResponseData {
  list: LeagueOptions[]
}

export const options = () => Request.get<ResponseData>('sport_league/options')
