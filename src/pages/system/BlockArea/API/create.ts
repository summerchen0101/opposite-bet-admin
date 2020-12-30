import Request from '@/utils/request'
import { CreateBlockArea } from './types'

export const create = (reqData: CreateBlockArea) =>
  Request.post<null>('country_ip_block/add', reqData)
