import Request from '@/utils/request'
import { AdminRoleOption } from './types'

interface ResponseData {
  admin_roles: AdminRoleOption[]
  admin: {
    username: string
    name: string
    admin_role_id: number
    admin_email: string | null
    single_withdrawal_limit: string
    daily_withdrawal_limit: string
    expire_date: string | null
    allow_ips: string | null
    status: 1
    remark: string | null
  }
}

export const fetchById = (id: string) =>
  Request.post<ResponseData>('admin/getAdminList', { id })
