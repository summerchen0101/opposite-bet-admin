import Request from '@/utils/request'
import { EditTeam } from './types'

export const edit = (reqData: EditTeam) =>
  Request.post<null>('sport_team/edit', reqData)
