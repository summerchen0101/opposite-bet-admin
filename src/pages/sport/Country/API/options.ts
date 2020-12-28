import Request from '@/utils/request'
import { CountryOption } from './types'

interface ResponseData {
  list: CountryOption[]
}

export const options = () => Request.get<ResponseData>('country/options')
