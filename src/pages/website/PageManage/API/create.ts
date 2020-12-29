import Request from '@/utils/request'
import { CreatePage } from './types'

export const create = (reqData: CreatePage) =>
  Request.post<null>('page/add', reqData)
