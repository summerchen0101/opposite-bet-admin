import Request from '@/utils/request'
import {
  StatusType,
  RemotePermission,
  RemotePagination,
  AdminAccount,
  ResponseBase,
} from '@/lib/types'
interface RequestProps {
  search_account?: string
  search_role?: string
  search_status?: AdminAccount.AdminStatusOptions
  search_ip?: string
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
  admin_roles: AdminAccount.AdminRoleOption[]
  permission: RemotePermission
  admin: ResponseAdmin[]
  paging: RemotePagination
}

export default (
  form: AdminAccount.ListSearchForm,
): Promise<ResponseBase<ResponseProps>> => {
  const data: RequestProps = {
    search_account: form.account || undefined,
    search_role: form.role ?? undefined,
    search_status: form.status ?? undefined,
    search_ip: form.ip || undefined,
  }
  return Request.post(`admin/getAdminList`, data)
}
