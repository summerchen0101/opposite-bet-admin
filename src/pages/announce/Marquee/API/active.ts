import Request from '@/utils/request'

interface Request {
  id: number
  is_active: boolean
}

export const active = (reqData: Request) =>
  Request.post<null>('marquee/active', reqData)
