import Request from '@/utils/request'
import { Status } from './types'

interface Request {
  id: number
  status: Status
}

export const status = (reqData: Request) =>
  Request.post<null>('admin_user/status', reqData)
