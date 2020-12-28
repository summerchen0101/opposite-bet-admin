import Request from '@/utils/request'
import { CreateSport } from './types'

export const create = (reqData: CreateSport) =>
  Request.post<null>('sport/add', reqData)
