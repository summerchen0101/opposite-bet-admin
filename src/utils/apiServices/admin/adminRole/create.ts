import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import { handleMenuTransfer, toErrorMessage } from '@/utils/transfer'

interface ResultProps {
  menu: any
}

interface RequestProps {
  method: 'ADD'
}

export default async (): Promise<ResultProps> => {
  const reqData: RequestProps = {
    method: 'ADD',
  }
  const { result, data } = await Request.post<ResponseBase<any>>(
    'admin/getAdminRoles',
    reqData,
  )
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
  return {
    menu: handleMenuTransfer(data),
  }
}
