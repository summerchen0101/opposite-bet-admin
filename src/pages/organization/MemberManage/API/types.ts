import { Status, PlatformType, IPBlockType } from '@/lib/enums'

export interface BlackIp {
  id: number

  ip_block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean

  editor: string
  created_at: number
  updated_at: number
}

export interface CreateBlackIp {
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean
}
export interface EditBlackIp {
  id: number
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean
}

export interface SearchFields {
  ip?: string
  block_type?: IPBlockType
  is_active?: Status
  page?: number
  perpage?: number
}
