import Request from '@/utils/request'
import { CreateMarquee } from './types'

export const create = (reqData: CreateMarquee) =>
  Request.post<null>('marquee/add', reqData)
