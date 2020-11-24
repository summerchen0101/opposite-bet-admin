import errCodes from '@/lib/errCodes'
import { MenuItem } from '@/types'

import QRCode from 'qrcode'
import { Permission, RemotePermission } from '@/types'

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

export const generateQR = async (text) => {
  try {
    return await QRCode.toDataURL(text)
  } catch (err) {
    console.error(err)
    return ''
  }
}

export const addKeyToArrayItem = function <T>(arr: T[]): T[] {
  return arr.map((t, i) => ({ key: i, ...t }))
}
