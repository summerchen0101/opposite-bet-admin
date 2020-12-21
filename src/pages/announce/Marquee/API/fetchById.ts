import Request from '@/utils/request'
import { News } from './types'

export const fetchById = (id: number) => Request.get<News>(`news/view/${id}`)
