import Request from '@/utils/request'
import { Status } from './types'

export interface Request {
  acc: string
  pass: string
  name: string
  role_ids: number[]
  permission_ids: number[]
  is_active: boolean
  status: Status
}

export const create = (reqData: Request) =>
  Request.post<null>('admin_user/add', reqData)
