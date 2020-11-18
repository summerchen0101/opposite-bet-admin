import { StatusType } from '..'
import { Moment } from 'moment'
export interface CreateFormProps {
  account: string
  realName: string
  email: string
  role: string
  singleLimit: number
  dailyLimit: number
  effectiveTime: 'limit' | 'forever'
  limitDate: Moment
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
  limitDate: Moment
  ip: string
  status: 'on' | 'off'
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
