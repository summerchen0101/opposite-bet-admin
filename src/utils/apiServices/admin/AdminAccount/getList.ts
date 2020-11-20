import Request from '@/utils/request'
import {
  StatusType,
  RemotePermission,
  RemotePagination,
  AdminAccount,
  ResponseBase,
  Permission,
  OptionType,
} from '@/lib/types'
import { permissionTransfer } from '@/utils/transfer'
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

interface ResultProps {
  list: any[]
  permission: Permission
  roleOptions: OptionType[]
}

export default async (
  form: AdminAccount.ListSearchForm,
): Promise<ResultProps> => {
  const reqData: RequestProps = {
    search_account: form.account || undefined,
    search_role: form.role ?? undefined,
    search_status: form.status ?? undefined,
    search_ip: form.ip || undefined,
  }
  const { result, data } = await Request.post<ResponseBase<ResponseProps>>(
    'admin/getAdminList',
    reqData,
  )
  if (result !== 'SUCCESS') {
    throw new Error('Error error!')
  }

  return {
    list:
      data.admin?.map((t) => ({
        key: t.admin_id,
        id: t.admin_id,
        account: t.admin_account,
        name: t.admin_name,
        role: t.admin_role,
        lastLogin: t.last_login,
        lastIp: t.last_ip,
        status: t.status === 1,
        isOnline: false,
      })) ?? [],
    permission: permissionTransfer(data.permission),
    roleOptions: data.admin_roles.map((t) => ({
      label: t.role_name,
      value: t.id,
    })),
  }
}
