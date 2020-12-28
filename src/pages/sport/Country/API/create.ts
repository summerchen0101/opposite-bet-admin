import Request from '@/utils/request'

interface Request {
  name: string
  permission_ids: number[]
  is_active: boolean
}

export const create = (reqData: Request) =>
  Request.post<null>('country/add', reqData)
