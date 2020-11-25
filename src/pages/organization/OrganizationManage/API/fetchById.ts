import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchById = (agent_id: string) =>
  Request.post<ResponseData>('admin/editAgent', { method: 'EDIT', agent_id })
