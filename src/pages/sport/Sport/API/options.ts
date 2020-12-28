import Request from '@/utils/request'
import { SportOption } from './types'

interface ResponseData {
  list: SportOption[]
}

export const options = () => Request.get<ResponseData>('sport/options')
