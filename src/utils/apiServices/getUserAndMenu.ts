import { ResponseBase, UserInfo } from '@/lib/types'
import Request from '@/utils/request'
export * from './admin'
import errCodes from '@/lib/errCodes'
import { permissionTransfer } from '../dataFactory'
import { handleMenuTransfer } from '../transfer'

interface ResponseProps {
  admin: UserInfo
  menu: any
}

export default async (): Promise<ResponseProps> => {
  const res = await Request.post<ResponseBase<ResponseProps>>(
    'admin/getAdminPortal',
  )
  if (res.result !== 'SUCCESS') {
    throw res
  }
  const admin = res.data.admin
  const menu = handleMenuTransfer(res.data.menu)
  return { admin, menu }
}
