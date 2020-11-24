import {
  OptionType,
  Permission,
  RemotePagination,
  RemotePermission,
  StatusType,
} from '@/types'

export type AdminStatusOptions = 0 | 1 | 2 | 3

export type EffectiveTimeType = 'limit' | 'forever'
export interface DataFormProps {
  id?: number
  account: string
  realName: string
  pw: string
  pw_confirm: string
  email: string
  role: number
  singleLimit: number
  dailyLimit: number
  effectiveTime: EffectiveTimeType
  limitDate: any
  ip: string
  status: AdminStatusOptions
  notes: string
}
export interface ListItem {
  key: number
  id: number
  account: string
  name: string
  role: string
  lastLogin: string
  lastIp: string
  status: boolean
  isOnline: boolean
}
export interface ListSearchForm {
  account?: string
  role?: string
  status?: AdminStatusOptions
  ip?: string
}

export interface AdminRoleOption {
  id: number
  role_name: string
}

/**
 * Request / Response
 */
export interface SearchRequest {
  search_account?: string
  search_role?: string
  search_status?: AdminStatusOptions
  search_ip?: string
}
export interface ResponseAdmin {
  admin_id: number
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
  admin: ResponseAdmin[]
  paging: RemotePagination
}

export interface ListResultProps {
  list: any[]
  permission: Permission
  roleOptions: OptionType[]
}

export interface EditResponseProps {
  admin_roles: AdminRoleOption[]
  admin: {
    username: string
    name: string
    admin_role_id: number
    admin_email: string | null
    single_withdrawal_limit: string
    daily_withdrawal_limit: string
    expire_date: string | null
    allow_ips: string | null
    status: 1
    remark: string | null
  }
}

export interface RequestCreateData {
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
export interface RequestEditData {
  admin_id: number
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
