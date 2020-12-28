import Request from '@/utils/request'
import { EditSport } from './types'

export const edit = (reqData: EditSport) =>
  Request.post<null>('sport/edit', reqData)
