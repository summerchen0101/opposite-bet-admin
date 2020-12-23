import Request from '@/utils/request'
import { Marquee } from './types'

export const fetchById = (id: number) =>
  Request.get<Marquee>(`marquee/view/${id}`)
