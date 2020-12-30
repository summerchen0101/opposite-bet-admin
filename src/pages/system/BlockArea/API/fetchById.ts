import Request from '@/utils/request'
import { BlockArea } from './types'

export const fetchById = (id: number) =>
  Request.get<BlockArea>(`country_ip_block/view/${id}`)
