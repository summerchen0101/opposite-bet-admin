import { Permission, RemotePermission, MenuItem } from '@/types'

export interface ListItem {
  id: number
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
  key: number
  name: string
  children?: RolePermissionItem
  permission: Permission
}

/**
 * Requesst & Response
 */

interface ResponseRoleItem {
  role_id: number
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  status: number
  menu: string
}

export interface ListResponse {
  permission: RemotePermission
  role: ResponseRoleItem[]
}

export interface ListResultProps {
  permission: Permission
  list: ListItem[]
}

// 新增
export interface DoCreateRequest {
  role_name: string
  menu_data: string // JSON string
}

// 編輯
export interface DoEditResponse {
  permission: RemotePermission
  role: ResponseRoleItem[]
}

export interface DoEditRequest {
  role_id: number
  role_name: string
  menu_data: string // JSON string
}
