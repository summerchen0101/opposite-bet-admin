import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('inbox_message/remove', { id })
