import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('activity/remove', { id })
