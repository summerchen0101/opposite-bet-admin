import Request from '@/utils/request'
import { EditMemberTag } from './types'

export const edit = (reqData: EditMemberTag) =>
  Request.post<null>('member_tag/edit', reqData)
