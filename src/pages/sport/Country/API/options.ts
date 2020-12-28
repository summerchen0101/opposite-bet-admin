import Request from '@/utils/request'
import { CountryOption } from './types'

interface ResponseData {
  countries: CountryOption[]
}

export const options = () => Request.get<ResponseData>('country/options')
