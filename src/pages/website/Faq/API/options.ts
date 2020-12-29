import Request from '@/utils/request'
import { FaqOption } from './types'

interface ResponseData {
  list: FaqOption[]
}

export const options = () => Request.get<ResponseData>('qa/options')
