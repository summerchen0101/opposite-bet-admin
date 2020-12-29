import Request from '@/utils/request'

export const deleteById = (id: number) =>
  Request.post<null>('country_ip_block/remove', { id })
