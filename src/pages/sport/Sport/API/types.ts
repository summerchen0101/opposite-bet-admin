import { Status } from '@/lib/enums'

export interface Sport {
  id: number
  name: string
  code: string
  note: string
  country_id: number
  is_active: boolean
  created_at: number
  updated_at: number
}

export interface CreateSport {
  name: string
  code: string
  note: string
  country_id: number
  is_active: boolean
}
export interface EditSport {
  id: number
  name: string
  code: string
  note: string
  country_id: number
  is_active: boolean
}

export interface SportOptions {
  id: number
  name: string
}

export interface SportSearch {
  country_id?: number
  is_active?: Status
  page?: number
  perpage?: number
}
