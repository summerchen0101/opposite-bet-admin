import Request from '@/utils/request'
import { CountryOptions } from './types'

interface ResponseData {
  countries: CountryOptions[]
}

export const options = () => Request.get<ResponseData>('country/options')
