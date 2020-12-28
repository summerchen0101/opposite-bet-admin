import Request from '@/utils/request'
import { SportOptions } from './types'

interface ResponseData {
  roles: SportOptions[]
}

export const options = () => Request.get<ResponseData>('sport/options')
