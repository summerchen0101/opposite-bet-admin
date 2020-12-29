import Request from '@/utils/request'
import { BlackArea } from './types'

export const fetchById = (id: number) =>
  Request.get<BlackArea>(`country_ip_block/view/${id}`)
