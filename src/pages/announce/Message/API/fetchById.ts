import Request from '@/utils/request'
import { Message } from './types'

export const fetchById = (id: number) =>
  Request.get<Message>(`inbox_message/view/${id}`)
