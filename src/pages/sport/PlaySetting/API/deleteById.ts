import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('opposite_odds/remove', { id })
