import Request from '@/utils/request'

interface Request {
  id: number
  pass: string
}

export const pass = (reqData: Request) =>
  Request.post<null>('admin_user/pass', reqData)
