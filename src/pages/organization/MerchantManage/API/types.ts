import { Status, PlatformType, IPBlockType } from '@/lib/enums'

export interface Merchant {
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

export interface CreateMerchant {
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
  note: string
  is_active: boolean
}
export interface EditMerchant {
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
