import Request from '@/utils/request'
import { Menu } from './types'

export const fetchById = (id: number) =>
  Request.get<Menu>(`admin_menu/view/${id}`)
