import Request from '@/utils/request'
import { CreateFaq } from './types'

export const create = (reqData: CreateFaq) =>
  Request.post<null>('qa/add', reqData)
