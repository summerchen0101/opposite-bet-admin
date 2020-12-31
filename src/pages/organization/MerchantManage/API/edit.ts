import Request from '@/utils/request'
import { EditMerchant } from './types'

export const edit = (reqData: EditMerchant) =>
  Request.post<null>('ip_block/edit', reqData)
