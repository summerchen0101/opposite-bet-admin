import {
  OptionType,
  Permission,
  RemotePermission,
  ResponseBase,
} from '@/lib/types'
import { AdminRole } from '@/lib/types/admin'
import { permissionTransfer } from '@/utils/transfer'
import Request from '@/utils/request'
import { toErrorMessage } from '@/utils/transfer'
import { ResponseRoleItem } from './types'
interface ResultProps {
  permission: Permission
  list: AdminRole.ListItem[]
}

export interface ReponseProps {
  permission: RemotePermission
  role: ResponseRoleItem[]
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
