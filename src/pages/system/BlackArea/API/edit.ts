import Request from '@/utils/request'
import { EditBlackArea } from './types'

export const edit = (reqData: EditBlackArea) =>
  Request.post<null>('country_ip_block/edit', reqData)
