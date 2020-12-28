import Request from '@/utils/request'
import { LeagueOptions } from './types'

interface ResponseData {
  leagues: LeagueOptions[]
}

export const options = () => Request.get<ResponseData>('sport_league/options')
