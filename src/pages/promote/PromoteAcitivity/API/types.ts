import { ProcessStatus, Status } from '@/lib/enums'

export interface Activity {
  id: number
  title: string
  content: string
  content_mobile: string
  img: string
  img_mobile: string
  bonus: number
  is_active: boolean
  start_at: number
  end_at: number

  editor: string
  created_at: number
  updated_at: number
}
type AutoAdded = 'created_at' | 'updated_at' | 'editor'
export type EditActivity = Omit<Activity, AutoAdded>
export type CreateActivity = Omit<Activity, AutoAdded | 'id'>

export interface SearchFields {
  title: string
  process_status: ProcessStatus | 0
  is_active: Status
  page?: number
  perpage?: number
}
