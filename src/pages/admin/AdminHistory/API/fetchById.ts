import Request from '@/utils/request'
import { User } from './types'

export const fetchById = (id: number) =>
  Request.get<User>(`admin_user/view/${id}`)
