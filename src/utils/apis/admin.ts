import Request from '@/utils/request'
import { StatusType, RemotePermission, RemotePagination } from '@/lib/types'
interface AdminListRequest {
  account?: string
  role?: string
  status?: StatusType
  ip?: string
}
interface Admin {
  admin_account: string | null
  admin_name: string
  admin_role: string
  last_login: string | null
  last_ip: string
  status: 1
}

interface AdminListReponse {
  permission: RemotePermission
  admin: Admin[]
  paging: RemotePagination
}

export const getAdminList = (
  req: AdminListRequest = {},
): Promise<AdminListReponse> => {
  const data = {
    search_account: req.account,
    search_role: req.role,
    search_status: req.status,
    search_ip: req.ip,
  }
  return Request.post(`admin/getAdminList`, data)
}

export const getAdminRoles = (): Promise<any> => {
  return Request.post(`admin/getAdminRoles`)
}
