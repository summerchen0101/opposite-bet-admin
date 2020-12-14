import { LevelCode } from '@/lib/enums'

import { MenuItem, Permission, RemotePermission } from '@/types'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import { ColumnsType } from 'antd/lib/table'

export const toCurrency = (num: number, decimal = 0) =>
  Number(num.toFixed(decimal)).toLocaleString()

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

export const addKeyToArrayItem = function <T>(arr: T[]): T[] {
  return arr.map((t, i) => ({ key: i, ...t }))
}

export const toDateTime = (unixTime) =>
  moment(unixTime).format('YYYY-MM-DD HH:mm:ss')

const levelCodes = Object.values(LevelCode)
export const getLevelCode = (
  currentLevel: LevelCode,
  operator = 0,
): LevelCode => {
  const currentIndex = levelCodes.indexOf(currentLevel)
  return levelCodes[currentIndex + operator]
}

export const getParentLevelCodes = (currentLevel: LevelCode) => {
  const currentIndex = levelCodes.indexOf(currentLevel)
  return levelCodes.slice(0, currentIndex)
}

export const localizeMessage = (msgId: string) => (
  <FormattedMessage id={msgId} />
)

export const getLevelName = (levelCode: LevelCode) => (
  <FormattedMessage id={`level.${levelCode}`} />
)

export const filterColumns = function <T>(
  originColumns: ColumnsType<T>,
  filterColumnsKey: string[],
) {
  return originColumns.filter(
    (c) => !filterColumnsKey.includes(c.key as string),
  )
}
