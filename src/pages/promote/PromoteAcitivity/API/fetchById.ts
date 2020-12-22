import Request from '@/utils/request'
import { Activity } from './types'

export const fetchById = (id: number) =>
  Request.get<Activity>(`activity/view/${id}`)
