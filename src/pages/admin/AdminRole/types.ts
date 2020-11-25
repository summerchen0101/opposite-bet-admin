import { Permission, RemotePermission, MenuItem } from '@/types'

export interface ListItem {
  id: string
  name: string
  count: number
  updatedAt: string
  updator: string
  creator: string
  createdAt: string
  menu: string
  status: number
}

export interface RolePermissionItem {
  key: string
  name: string
  children?: RolePermissionItem
  permission: Permission
}
