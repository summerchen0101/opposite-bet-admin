import Request from '@/utils/request'
import { BlockStatus } from './types'

export interface Request {
  acc: string
  pass: string
  name: string
  role_ids: number[]
  permission_ids: number[]
  is_active: boolean
  status: BlockStatus
}

export const create = (reqData: Request) =>
  Request.post<null>('admin_user/add', reqData)
