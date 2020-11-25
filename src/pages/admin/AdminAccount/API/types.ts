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
  status: number
  remark?: string
}
