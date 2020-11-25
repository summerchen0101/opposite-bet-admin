import {
  OptionType,
  Permission,
  RemotePagination,
  RemotePermission,
  StatusType,
} from '@/types'

export interface AdminRoleOption {
  id: number
  role_name: string
}

export interface ResponseTableItemSchema {
  name: string
  username: string
  password: string
  confirm_password: string
  admin_role_id: number // 角色代碼
  admin_email: string
  single_withdrawal_limit: number // 單筆提款審核上限
  daily_withdrawal_limit: number // 每日提款審核上限
  expire_date: string // 2020-11-17 or null
  allow_ips: string
  status: AdminStatusOptions
  remark?: string
}

export type AdminStatusOptions = 0 | 1 | 2 | 3

/**
 * Request / Response
 */
export interface SearchRequest {
  search_account?: string
  search_role?: string
  search_status?: AdminStatusOptions
  search_ip?: string
}
export interface ResponseTableItem {
  admin_id: string
  admin_account: string | null
  admin_name: string
  admin_role: string
  last_login: string | null
  last_ip: string
  status: StatusType
  online: string
}

export interface ListResponse {
  admin_roles: AdminRoleOption[]
  permission: RemotePermission
  admin: ResponseTableItem[]
  paging: RemotePagination
}

export interface ListResultProps {
  list: any[]
  permission: Permission
  roleOptions: OptionType[]
}

export interface EditResponseProps {
  admin_roles: AdminRoleOption[]
  admin: ResponseTableItemSchema
}

export type RequestCreateData = ResponseTableItemSchema
export interface RequestEditData extends ResponseTableItemSchema {
  admin_id: string
}
