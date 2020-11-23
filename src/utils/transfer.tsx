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
  obj: OrgManage.RemoteAgent,
  level = 0,
): OrgManage.AgentItem[] => {
  const levelMap = {
    0: '廠商',
    1: '股東',
    2: '總代',
    3: '代理',
    4: '會員',
  }
  const levelItem = {
    label: levelMap[level],
    value: 0,
    disabled: true,
  }
  const items = Object.keys(obj).map((key) => {
    const name = obj[key].NAME as string
    delete obj[key].NAME
    const item: OrgManage.AgentItem = {
      value: (key as unknown) as number,
      label: name,
    }
    if (Object.keys(obj[key]).length > 0) {
      item.children = agentStructureCreator(obj[key], ++level)
    }
    return item
  })

  return [levelItem, ...items]
}
