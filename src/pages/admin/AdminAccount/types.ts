export type AdminStatusOptions = 0 | 1 | 2 | 3

export interface DataFormProps {
  id?: string
  account: string
  realName: string
  pw: string
  pw_confirm: string
  email: string
  role: number
  singleLimit: number
  dailyLimit: number
  effectiveTime: string
  limitDate: any
  ip: string
  status: AdminStatusOptions
  notes: string
}
export interface ListItem {
  key: string
  id: string
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
