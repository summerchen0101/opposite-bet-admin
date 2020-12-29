import Request from '@/utils/request'
import { EditFaqCategory } from './types'

export const edit = (reqData: EditFaqCategory) =>
  Request.post<null>('qa_catalogue/edit', reqData)
