import { Status } from '@/lib/enums'

export interface Page {
  id: number
  title: string
  code: string
  content: string
  content_mobile: string
  is_active: boolean

  editor: string
  created_at: number
  updated_at: number
}
export interface EditPage {
  id: number
  title: string
  code: string
  content: string
  content_mobile: string
  is_active: boolean
}
export interface CreatePage {
  title: string
  code: string
  content: string
  content_mobile: string
  is_active: boolean
}

export interface SearchFields {
  page?: number
  perpage?: number
}
