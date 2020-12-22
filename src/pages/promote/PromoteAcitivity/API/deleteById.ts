import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.get<null>(`activity/remove/${id}`)
