import Request from '@/utils/request'
import { BlockStatus } from './types'

interface Request {
  id: number
  status: BlockStatus
}

export const status = (reqData: Request) =>
  Request.post<null>('admin_user/status', reqData)
