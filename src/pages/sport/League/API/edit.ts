import Request from '@/utils/request'
import { EditLeague } from './types'

export const edit = (reqData: EditLeague) =>
  Request.post<null>('sport_league/edit', reqData)
