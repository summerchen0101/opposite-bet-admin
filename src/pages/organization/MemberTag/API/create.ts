import Request from '@/utils/request'
import { CreateMemberTag } from './types'

export const create = (reqData: CreateMemberTag) =>
  Request.post<null>('member_tag/add', reqData)
