import { Status, PlatformType, IPBlockType } from '@/lib/enums'

export interface BlockArea {
  id: number

  platform_type: PlatformType
  note: string
  is_active: boolean
  code: string

  editor: string
  created_at: number
  updated_at: number
}

export interface CreateBlockArea {
  platform_type: PlatformType
  note: string
  is_active: boolean
  code: string
}
export interface EditBlockArea {
  id: number
  platform_type: PlatformType
  note: string
  is_active: boolean
  code: string
}

export interface SearchFields {
  is_active?: Status
  page?: number
  perpage?: number
}
