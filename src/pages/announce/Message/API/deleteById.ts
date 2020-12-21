import Request from '@/utils/request'

export const deleteById = (id: number) => Request.get<null>(`news/remove/${id}`)
