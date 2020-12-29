import { Status } from '@/lib/enums'

export interface Faq {
  id: number
  catalogue: {
    id: number
    name: string
  }
  title: string
  content: string
  content_mobile: string
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreateFaq {
  catalogue_id: number
  title: string
  content: string
  content_mobile: string
  is_active: boolean
}
export interface EditFaq {
  id: number
  catalogue_id: number
  title: string
  content: string
  content_mobile: string
  is_active: boolean
}

export interface FaqOption {
  id: number
  name: string
}

export interface SearchFaq {
  catalogue_id?: number
  is_active?: Status
  page?: number
  perpage?: number
}
