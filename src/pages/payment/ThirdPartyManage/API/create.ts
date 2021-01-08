import Request from '@/utils/request'
import { CreateBlackIp } from './types'

export const create = (reqData: CreateBlackIp) =>
  Request.post<null>('ip_block/add', reqData)
