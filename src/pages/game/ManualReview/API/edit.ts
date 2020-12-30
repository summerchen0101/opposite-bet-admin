import Request from '@/utils/request'
import { EditBlackIp } from './types'

export const edit = (reqData: EditBlackIp) =>
  Request.post<null>('ip_block/edit', reqData)
