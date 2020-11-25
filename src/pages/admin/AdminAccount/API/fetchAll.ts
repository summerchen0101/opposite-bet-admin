import { RemotePagination, RemotePermission, StatusType } from '@/types'
import Request from '@/utils/request'
import { AdminRoleOption } from './types'

export interface SearchRequest {
  search_account?: string
  search_role?: string
  search_status?: number
  search_ip?: string
}
export interface ResponseTableItem {
  admin_id: string
  admin_account: string | null
  admin_name: string
  admin_role: string
  last_login: string | null
  last_ip: string
  status: StatusType
  online: string
}

export interface ListResponse {
  admin_roles: AdminRoleOption[]
  permission: RemotePermission
  admin: ResponseTableItem[]
  paging: RemotePagination
}

export const fetchAll = (reqData?: SearchRequest) =>
  Request.post<ListResponse>('admin/getAdminList', reqData)
