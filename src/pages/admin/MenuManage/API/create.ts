import Request from '@/utils/request'
import { CreateMenuRequest } from './types'

export const create = (reqData: CreateMenuRequest) =>
  Request.post<null>('admin_menu/add', reqData)
