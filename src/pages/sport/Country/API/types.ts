import { Permission } from '@/API/permission/types'

export interface Country {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
  created_at: number
  updated_at: number
}

export interface CountryOption {
  id: number
  name: string
}
