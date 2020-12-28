import Request from '@/utils/request'
import { CreateSection } from './types'

export const create = (reqData: CreateSection) =>
  Request.post<null>('sport_section/add', reqData)
