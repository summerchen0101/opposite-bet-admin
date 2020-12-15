import Request from '@/utils/request'
import { Status } from './types'

interface Request {
  id: number
  acc: string
  pass: string
  name: string
  role_ids: number[]
  permission_ids: number[]
  is_active: boolean
  status: Status
}

export const edit = (reqData: Request) =>
  Request.post<null>('admin_user/edit', reqData)
