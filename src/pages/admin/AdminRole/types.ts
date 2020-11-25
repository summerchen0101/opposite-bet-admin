import { Permission, RemotePermission, MenuItem } from '@/types'

export interface RolePermissionItem {
  key: string
  name: string
  children?: RolePermissionItem
  permission: Permission
}
