export type AdminStatusOptions = 0 | 1 | 2 | 3
export interface DataFormProps {
  account: string
  realName: string
  email: string
  role: number
  singleLimit: number
  dailyLimit: number
  effectiveTime: 'limit' | 'forever'
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
