import Request from '@/utils/request'
import { CreateBlackArea } from './types'

export const create = (reqData: CreateBlackArea) =>
  Request.post<null>('country_ip_block/add', reqData)
