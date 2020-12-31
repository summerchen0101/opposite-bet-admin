import Request from '@/utils/request'
import { Merchant } from './types'

export const fetchById = (id: number) =>
  Request.get<Merchant>(`ip_block/view/${id}`)
