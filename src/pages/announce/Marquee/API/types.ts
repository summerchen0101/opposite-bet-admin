import { Status } from '@/lib/enums'

export interface Marquee {
  id: number
  content: string
  url: string
  is_blank: boolean
  is_active: boolean
  start_at: number
  end_at: number

  editor: string
  created_at: number
  updated_at: number
}
type AutoAdded = 'created_at' | 'updated_at' | 'editor'
export type EditNews = Omit<Marquee, AutoAdded>
export type CreateNews = Omit<Marquee, AutoAdded | 'id'>

export interface SearchFields {
  content: string
  start_at: number
  end_at: number
  is_active: Status
  page?: number
  perpage?: number
}
