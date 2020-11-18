import { AdminAccount, ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import moment from 'moment'
interface RequestProps {
  method: 'EDIT'
  admin_id?: number | string
}

interface ResponseProps {
  admin_roles: AdminAccount.AdminRoleOption[]
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

export default async (id: number): Promise<AdminAccount.DataFormProps> => {
  const reqData: RequestProps = {
    method: 'EDIT',
    admin_id: id,
  }
  const res = await Request.post<ResponseBase<ResponseProps>>(
    'admin/editAdmin',
    reqData,
  )
  if (res.result !== 'SUCCESS') {
    throw res
  }
  const _admin = res.data.admin
  const resultData: AdminAccount.DataFormProps = {
    account: _admin.username,
    realName: _admin.name,
    email: _admin.admin_email,
    role: _admin.admin_role_id,
    singleLimit: +_admin.single_withdrawal_limit,
    dailyLimit: +_admin.daily_withdrawal_limit,
    effectiveTime: _admin.expire_date ? 'limit' : 'forever',
    limitDate: _admin.expire_date ? moment(_admin.expire_date) : null,
    ip: _admin.allow_ips,
    status: _admin.status,
    notes: _admin.remark,
  }
  return resultData
}
