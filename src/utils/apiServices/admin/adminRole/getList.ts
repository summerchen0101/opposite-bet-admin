import {
  OptionType,
  Permission,
  RemotePermission,
  ResponseBase,
} from '@/lib/types'
import { AdminRole } from '@/lib/types/admin'
import { permissionTransfer } from '@/utils/dataFactory'
import Request from '@/utils/request'
import { toErrorMessage } from '@/utils/transfer'

interface ResponseRoleItem {
  role_id: number
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  menu: string
}

interface ReponseProps {
  permission: RemotePermission
  role: ResponseRoleItem[]
}

interface ResultProps {
  permission: Permission
  list: AdminRole.ListItem[]
}

export default async (): Promise<ResultProps> => {
  const { result, data } = await Request.post<ResponseBase<ReponseProps>>(
    `admin/getAdminRoles`,
  )
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
  return {
    permission: permissionTransfer(data.permission),
    list: data.role.map((t, i) => ({
      key: t.role_id,
      id: t.role_id,
      name: t.role_name,
      count: t.used_count,
      updatedAt: t.updated_at,
      updator: t.updator,
      createdAt: t.created_at,
      creator: t.createtor,
      menu: t.menu,
    })),
  }
}
