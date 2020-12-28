import Request from '@/utils/request'

export interface Role {
  id: number
  name: string
}
interface ResponseData {
  countries: Role[]
}

export const options = () => Request.get<ResponseData>('country/options')
