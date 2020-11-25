import { RemotePermission } from '@/types'
import Request from '@/utils/request'
export interface ResponseTableItem {
  role_id: string
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  status: number
  menu: string
}

export interface ResponseData {
  permission: RemotePermission
  role: ResponseTableItem[]
}
export const fetchAll = () => Request.post<ResponseData>('admin/getAdminRoles')
