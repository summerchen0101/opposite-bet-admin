import Request from '@/utils/request'
import { Sport } from './types'

export const fetchById = (id: number) => Request.get<Sport>(`sport/view/${id}`)
