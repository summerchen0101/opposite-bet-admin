import Request from '@/utils/request'
import { EditBlockArea } from './types'

export const edit = (reqData: EditBlockArea) =>
  Request.post<null>('country_ip_block/edit', reqData)
