import { OptionType, Permission, RemotePermission } from '@/lib/types'
import { AdminRole } from '@/lib/types/admin'
import { permissionTransfer } from '@/utils/dataFactory'
import Request from '@/utils/request'

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
  const res = await Request.post<ReponseProps>(`admin/getAdminRoles`)
  return {
    permission: permissionTransfer(res.permission),
    list: res.role.map((t, i) => ({
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
