import Request from '@/utils/request'
import { MemberTag } from './types'

export const fetchById = (id: number) =>
  Request.get<MemberTag>(`member_tag/view/${id}`)
