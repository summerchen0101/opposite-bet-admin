import Request from '@/utils/request'
import { StatusType, RemotePermission, RemotePagination } from '@/lib/types'
interface RequestProps {
  account?: string
  role?: string
  status?: StatusType
  ip?: string
}
interface ResponseAdmin {
  admin_id: number
  admin_account: string | null
  admin_name: string
  admin_role: string
  last_login: string | null
  last_ip: string
  status: StatusType
  online: string
}

interface ResponseProps {
  permission: RemotePermission
  admin: ResponseAdmin[]
  paging: RemotePagination
}

export default (req: RequestProps = {}): Promise<ResponseProps> => {
  const data = {
    search_account: req.account,
    search_role: req.role,
    search_status: req.status,
    search_ip: req.ip,
  }
  return Request.post(`admin/getAdminList`, data)
}
