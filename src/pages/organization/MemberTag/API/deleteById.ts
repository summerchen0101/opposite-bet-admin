import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('member_tag/remove', { id })
