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
export interface ListSearchForm {
  account?: string
  role?: string
  status?: AdminStatusOptions
  ip?: string
}
