import Request from '@/utils/request'
import { BlackIp } from './types'

export const fetchById = (id: number) =>
  Request.get<BlackIp>(`ip_block/view/${id}`)
