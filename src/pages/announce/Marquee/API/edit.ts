import Request from '@/utils/request'
import { EditMarquee } from './types'

export const edit = (reqData: EditMarquee) =>
  Request.post<null>('marquee/edit', reqData)
