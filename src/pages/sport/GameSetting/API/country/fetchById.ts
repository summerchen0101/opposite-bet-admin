import Request from '@/utils/request'
import { Country } from './types'

export const fetchById = (id: number) =>
  Request.get<Country>(`country/view/${id}`)
