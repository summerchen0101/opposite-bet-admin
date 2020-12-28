import Request from '@/utils/request'
import { TeamOptions } from './types'

interface ResponseData {
  teams: TeamOptions[]
}

export const options = () => Request.get<ResponseData>('sport_team/options')
