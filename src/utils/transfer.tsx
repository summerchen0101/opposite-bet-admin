import errCodes from '@/lib/errCodes'
import { MenuItem } from '@/lib/types'

import { Permission, RemotePermission, OrgManage } from '@/lib/types'

export const toCurrency = (num: number, decimal = 0) =>
  Number(num.toFixed(decimal)).toLocaleString()

export const toErrorMessage = (code: string) => errCodes[code]

export const permissionTransfer = (per: RemotePermission): Permission => {
  return { view: per.VIEW === 'Y', edit: per.EDIT === 'Y' }
}

export const handleMenuTransfer = (menu): MenuItem[] => {
  const newMenu = []
  for (const rootId in menu) {
    const { root, sub } = menu[rootId]
    const children = []
    for (const subId in sub) {
      const { name, url, permission } = sub[subId]
      children.push({
        id: subId,
        parent: rootId,
        name,
        permission: permissionTransfer(permission),
      })
    }
    newMenu.push({
      id: rootId,
      name: root.name,
      children,
    })
  }
  return newMenu
}

export const agentStructureCreator = (
  objList: OrgManage.RemoteAgent,
): OrgManage.AgentItem[] => {
  const name = objList.NAME
  delete objList.NAME
  const list = []
  for (const id in objList) {
    const item: Partial<OrgManage.AgentItem> = {
      id: +id,
      children: agentStructureCreator(objList[id]),
    }
    if (name) {
      item.name = name
    }
    list.push(item)
  }
  return list
}
