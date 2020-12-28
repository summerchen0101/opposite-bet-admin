import Request from '@/utils/request'

interface Request {
  id: number
  name: string
  permission_ids: number[]
  is_active: boolean
}

export const edit = (reqData: Request) =>
  Request.post<null>('country/edit', reqData)
