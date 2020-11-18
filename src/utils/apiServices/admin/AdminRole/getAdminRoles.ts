import { RemotePermission } from '@/lib/types'
import Request from '@/utils/request'

interface Role {
  role_id: number | string
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  menu: any
}

interface ReponseProps {
  permission: RemotePermission
  role: Role[]
}

export default (): Promise<ReponseProps> => {
  return Request.post<ReponseProps>(`admin/getAdminRoles`)
}
