import Request from '@/utils/request'
import { Faq } from './types'

export const fetchById = (id: number) => Request.get<Faq>(`qa/view/${id}`)
