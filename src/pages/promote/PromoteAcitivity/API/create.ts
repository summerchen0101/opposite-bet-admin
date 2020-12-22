import Request from '@/utils/request'
import { CreateActivity } from './types'

export const create = (reqData: CreateActivity) =>
  Request.post<null>('activity/add', reqData)
