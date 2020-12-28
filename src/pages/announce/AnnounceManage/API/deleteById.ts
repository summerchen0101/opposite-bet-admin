import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('news/remove', { id })
