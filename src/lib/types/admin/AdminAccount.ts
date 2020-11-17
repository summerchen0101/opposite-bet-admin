import { StatusType } from '..'

export interface CreateFormProps {
  account: string
  realName: string
  email: string
  role: string
  singleLimit: number
  dailyLimit: number
  effectiveTime: 'limit' | 'forever'
  limitDate: string
  ip: string
  status: 'on' | 'off'
  notes: string
}
export interface EditFormProps {
  id: number
  account: string
  realName: string
  email: string
  role: string
  singleLimit: number
  dailyLimit: number
  effectiveTime: 'limit' | 'forever'
  limitDate: string
  ip: string
  status: 'on' | 'off'
  notes: string
}
