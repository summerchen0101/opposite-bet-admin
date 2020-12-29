import { Status } from '@/lib/enums'

export interface Banner {
  id: number
  title: string
  url: string
  img: string
  img_mobile: string
  is_blank: boolean
  is_active: boolean
  start_at: number
  end_at: number

  editor: string
  created_at: number
  updated_at: number
}
export interface EditNews {
  id: number
  title: string
  url: string
  img: string
  img_mobile: string
  is_blank: boolean
  is_active: boolean
  start_at: number
  end_at: number
}
export interface CreateNews {
  title: string
  url: string
  img: string
  img_mobile: string
  is_blank: boolean
  is_active: boolean
  start_at: number
  end_at: number
}

export interface SearchFields {
  content: string
  start_at: number
  end_at: number
  is_active: Status
  page?: number
  perpage?: number
}
