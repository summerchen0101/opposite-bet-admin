import Request from '@/utils/request'
import { Page } from './types'

export const fetchById = (id: number) => Request.get<Page>(`page/view/${id}`)
