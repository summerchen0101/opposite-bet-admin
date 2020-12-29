import Request from '@/utils/request'
import { CreateBanner } from './types'

export const create = (reqData: CreateBanner) =>
  Request.post<null>('banner/add', reqData)
