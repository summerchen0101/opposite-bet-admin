import Request from '@/utils/request'
import { Play } from './types'

export const fetchById = (id: number) =>
  Request.get<Play>(`sport_play/view/${id}`)
