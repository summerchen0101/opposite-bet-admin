import { Permission } from '@/API/permission/types'
import { Role } from '../../AdminRole/API'

export interface Menu {
  children?: Menu[]
  id: number
  created_at: number
  icon: string
  is_active: boolean
  name: string
  parent_id?: number
  path: string
  permissions: Permission[]
  roles: Role[]
  sort: number
  updated_at: number
}

export interface EditMenuRequest
  extends Pick<
    Menu,
    'id' | 'name' | 'icon' | 'path' | 'parent_id' | 'is_active'
  > {
  role_ids: number[]
  permission_ids: number[]
}

export type CreateMenuRequest = Omit<EditMenuRequest, 'id'>
