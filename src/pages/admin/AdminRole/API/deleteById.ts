import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.get<null>(`admin_role/remove/${id}`)
