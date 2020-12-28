import Request from '@/utils/request'
import { EditCountry } from './types'

export const edit = (reqData: EditCountry) =>
  Request.post<null>('country/edit', reqData)
