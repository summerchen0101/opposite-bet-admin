import { MenuItem, ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import { handleMenuTransfer, toErrorMessage } from '@/utils/transfer'

interface RequestProps {
  method: 'EDIT'
  role_name: string
  menu_data: MenuItem[]
}

export default async ({ name, menu }): Promise<any> => {
  const reqData: RequestProps = {
    method: 'EDIT',
    role_name: name,
    menu_data: menu,
  }
  const { result, data } = await Request.post<ResponseBase<any>>(
    'admin/storeAdminRole',
    reqData,
  )
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
  return
}
