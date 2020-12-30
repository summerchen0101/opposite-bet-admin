import Request from '@/utils/request'
import { TeamOption } from './types'

interface ResponseData {
  list: TeamOption[]
}

export const options = () => Request.get<ResponseData>('sport_team/options')
