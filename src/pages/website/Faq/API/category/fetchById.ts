import Request from '@/utils/request'
import { FaqCategory } from './types'

export const fetchById = (id: number) =>
  Request.get<FaqCategory>(`qa_catalogue/view/${id}`)
