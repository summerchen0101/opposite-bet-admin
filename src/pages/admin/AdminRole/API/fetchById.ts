import Request from '@/utils/request'
import { Role } from './types'

export const fetchById = (id: number) =>
  Request.get<Role>(`admin_role/view/${id}`)
