import Request from '@/utils/request'
import { FaqCategoryOption } from './types'

interface ResponseData {
  list: FaqCategoryOption[]
}

export const options = () => Request.get<ResponseData>('qa_catalogue/options')
