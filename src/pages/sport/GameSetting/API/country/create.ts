import Request from '@/utils/request'
import { CreateCountry } from './types'

export const create = (reqData: CreateCountry) =>
  Request.post<null>('country/add', reqData)
