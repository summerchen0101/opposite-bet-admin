import Request from '@/utils/request'
import { CreateMessage } from './types'

export const create = (reqData: CreateMessage) =>
  Request.post<null>('inbox_message/add', reqData)
