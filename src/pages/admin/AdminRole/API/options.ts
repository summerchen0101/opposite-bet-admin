import Request from '@/utils/request'

export interface Role {
  id: number
  name: string
}
interface ResponseData {
  list: Role[]
}

export const options = () => Request.get<ResponseData>('admin_role/options')
