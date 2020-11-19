import errCodes from '@/lib/errCodes'
import { MenuItem } from '@/lib/types'
import { permissionTransfer } from './dataFactory'

export const toCurrency = (num: number, decimal = 0) =>
  Number(num.toFixed(decimal)).toLocaleString()

export const toErrorMessage = (code: string) => errCodes[code]

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
