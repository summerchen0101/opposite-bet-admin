import Request from '@/utils/request'
import { PlaySetting } from './types'

export const fetchById = (id: number) =>
  Request.get<PlaySetting>(`opposite_odds/view/${id}`)
