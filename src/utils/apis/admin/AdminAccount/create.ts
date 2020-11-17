import Request from '@/utils/request'
import { MethodType, ResponseBase, StatusType } from '@/lib/types'
// import { CreateFormProps } from '@/pages/admin/AdminAccount/containers/PopupCreateForm'
import { AdminAccount } from '@/lib/types'

interface RequestProps {
  method: 'ADD'
  name: string
  username: string
  admin_role_id: number // 角色代碼
  admin_email: string
  single_withdrawal_limit: number // 單筆提款審核上限
  daily_withdrawal_limit: number // 每日提款審核上限
  expire_date: string // 2020-11-17 or null
  allow_ips: string
  status: StatusType
  remark?: string
}

// interface EditRequestProps {
//   method: 'EDIT'
//   admin_id: number
//   name: string
//   username: string
//   admin_role_id: number // 角色代碼
//   admin_email: string
//   single_withdrawal_limit: number // 單筆提款審核上限
//   daily_withdrawal_limit: number // 每日提款審核上限
//   expire_date: string // 2020-11-17 or null
//   allow_ips: string
//   status: StatusType
//   remark?: string
// }

export default (form: AdminAccount.CreateFormProps): Promise<ResponseBase> => {
  const expireDate = form.effectiveTime === 'limit' ? form.limitDate : ''
  const data: RequestProps = {
    method: 'ADD',
    name: form.realName,
    username: form.account,
    admin_role_id: 123,
    admin_email: form.email,
    single_withdrawal_limit: form.singleLimit, // 單筆提款審核上限
    daily_withdrawal_limit: form.dailyLimit, // 每日提款審核上限
    expire_date: expireDate, // 2020-11-17 or null
    allow_ips: form.ip,
    status: form.status == 'on' ? 1 : 0,
    remark: form.notes,
  }
  return Request.post(`admin/storeAdmin`, data)
}
