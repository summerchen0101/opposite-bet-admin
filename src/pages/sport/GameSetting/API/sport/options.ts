import Request from '@/utils/request'

export interface Role {
  id: number
  name: string
}
interface ResponseData {
  roles: Role[]
}

export const options = () => Request.get<ResponseData>('sport/options')
