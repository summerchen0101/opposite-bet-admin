import { RemotePermission, ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import { handleMenuTransfer, toErrorMessage } from '@/utils/transfer'
import { ResponseRoleItem } from './types'

interface ResultProps {
  id: number
  name: string
  menu: any
}

interface RequestProps {
  method: 'EDIT'
  role_id: number
}

export interface ReponseProps {
  permission: RemotePermission
  role: ResponseRoleItem[]
}

export default async (id: number): Promise<ResultProps> => {
  const reqData: RequestProps = {
    method: 'EDIT',
    role_id: id,
  }
  const { result, data } = await Request.post<ResponseBase<ReponseProps>>(
    'admin/getAdminRoles',
    reqData,
  )
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
  const { role_name, role_id, menu } = data.role[0]
  return {
    id: role_id,
    name: role_name,
    menu: handleMenuTransfer(menu),
  }
}
