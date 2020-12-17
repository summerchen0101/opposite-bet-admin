import Request from '@/utils/request'
import { Permission, Role } from './types'

export const fetchById = (id: number) =>
  Request.get<Role>(`admin_menu/view/${id}`)
