import Request from '@/utils/request'
import { CreateFaqCategory } from './types'

export const create = (reqData: CreateFaqCategory) =>
  Request.post<null>('qa_catalogue/add', reqData)
