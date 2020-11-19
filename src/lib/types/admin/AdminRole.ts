import { Permission } from '..'

export interface ListItem {
  id: number
  name: string
  count: number
  updatedAt: string
  updator: string
  creator: string
  createdAt: string
  menu: string
}

export interface RolePermissionItem {
  key: number
  name: string
  permission: Permission
}
