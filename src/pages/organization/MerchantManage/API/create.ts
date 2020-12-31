import Request from '@/utils/request'
import { CreateMerchant } from './types'

export const create = (reqData: CreateMerchant) =>
  Request.post<null>('ip_block/add', reqData)
