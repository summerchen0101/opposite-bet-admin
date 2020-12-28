import Request from '@/utils/request'
import { Country, SearchFields } from './types'

export interface Response {
  countries: Country[]
  total_count: number
  total_page: number
}

type Request = SearchFields
export const fetchAll = (reqData?: Request) =>
  Request.post<Response>('country/list', {
    page: 1,
    perpage: 20,
    ...reqData,
  })
