import Request from '@/utils/request'
import { EditPlay } from './types'

export const edit = (reqData: EditPlay) =>
  Request.post<null>('sport_play/edit', reqData)
