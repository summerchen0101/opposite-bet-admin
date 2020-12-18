import { Permission } from '@/API/permission/types'

export interface Role {
  id: number
  is_active: boolean
  name: string
  permissions: Permission[]
  created_at: number
  updated_at: number
}

export interface RoleOption {
  id: number
  name: string
}
