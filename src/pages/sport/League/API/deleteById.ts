import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('sport_league/remove', { id })