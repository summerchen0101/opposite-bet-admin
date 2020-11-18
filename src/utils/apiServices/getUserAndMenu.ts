import { ResponseBase, UserInfo } from '@/lib/types'
import Request from '@/utils/request'
export * from './admin'
import errCodes from '@/lib/errCodes'
import { permissionTransfer } from '../dataFactory'

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
  const menu = []
  for (const rootId in res.data.menu) {
    const { root, sub } = res.data.menu[rootId]
    const children = []
    for (const subId in sub) {
      const { name, url, permission } = sub[subId]
      children.push({
        id: subId,
        name,
        permission: permissionTransfer(permission),
      })
    }
    menu.push({
      id: rootId,
      name: root.name,
      children,
    })
  }
  return { admin, menu }
}
