import Request from '@/utils/request'
import { Banner } from './types'

export const fetchById = (id: number) =>
  Request.get<Banner>(`banner/view/${id}`)
