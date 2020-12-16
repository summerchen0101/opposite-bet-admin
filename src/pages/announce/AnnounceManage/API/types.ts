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

export enum NewsType {
  Marquee = 1,
  System = 2,
  Game = 3,
  Activity = 4,
}
