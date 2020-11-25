import { RemotePagination, RemotePermission } from '@/types'
import Request from '@/utils/request'

export interface RequestData {
  search_account?: string
  search_role?: string
  search_status?: number
  search_ip?: string
}

export interface ResponseTableItem {
  agent_id: number
  agent_name: string
  agent_account: string
  agent_role: string
  upper_link: string
  lower_link: string
  sub_account: string
  points: string
  bonus: string
  status: number
  allow_ip: string
  member_count: string
  member_balance: string
  updated_by: string
  updated_at: string
}

export interface ListResponse {
  permission: RemotePermission
  agent: ResponseTableItem[]
  paging: RemotePagination
}

export const fetchAll = (reqData?: RequestData) =>
  Request.post<ListResponse>('admin/getAgentList', reqData)
