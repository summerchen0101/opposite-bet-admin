import { Status } from '@/lib/enums'

export interface News {
  id: number
  title: string
  content: string
  start_at: number
  end_at: number
  is_active: boolean
  news_type: NewsType

  editor: string
  created_at: number
  updated_at: number
}
type AutoAdded = 'created_at' | 'updated_at' | 'editor'
export type EditNews = Omit<News, AutoAdded>
export type CreateNews = Omit<News, AutoAdded | 'id'>

export interface SearchFields {
  title: string
  start_at: number
  end_at: number
  is_active: Status
  news_type: NewsType
}

export enum NewsType {
  ALL = 0,
  Marquee = 1,
  System = 2,
  Game = 3,
  Activity = 4,
}
