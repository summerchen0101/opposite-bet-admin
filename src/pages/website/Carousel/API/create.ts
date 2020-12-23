import Request from '@/utils/request'
import { CreateNews } from './types'

export const create = (reqData: CreateNews) =>
  Request.post<null>('marquee/add', reqData)
