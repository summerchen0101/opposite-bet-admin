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

export interface ResponseTableItem {
  agent_id: number
  agent_name: string
  agent_account: string
  agent_role: string
  upper_link: string
  lower_link: string
  sub_account: string
  points: string
  bonus: string
  status: number
  allow_ip: string
  member_count: string
  member_balance: string
  updated_by: string
  updated_at: string
}

export interface ListResponse {
  permission: RemotePermission
  agent: ResponseTableItem[]
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
