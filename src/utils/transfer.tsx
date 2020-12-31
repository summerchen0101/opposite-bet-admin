import { LevelCode } from '@/lib/enums'
import { OptionsType } from '@/lib/types'
import { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import React from 'react'
import { FormattedMessage } from 'react-intl'

export const toCurrency = (num: number, decimal = 0) =>
  Number(num.toFixed(decimal)).toLocaleString()

export const addKeyToArrayItem = function <T>(arr: T[]): T[] {
  return arr.map((t, i) => ({ key: i, ...t }))
}

export const toDateTime = (unixTime) =>
  moment.unix(unixTime).format('YYYY-MM-DD HH:mm:ss')

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

export const getLevelName = (levelCode: LevelCode) => {
  return <FormattedMessage id={`level.${levelCode}`} />
}

export const filterColumns = function <T>(
  originColumns: ColumnsType<T>,
  filterColumnsKey: string[],
) {
  return originColumns.filter(
    (c) => !filterColumnsKey.includes(c.key as string),
  )
}

export const toOptionName = function <T>(
  options: OptionsType<T>,
  code: T,
): string {
  return options.find((t) => t.value === code)?.label
}

export const remoteOptsToLocalOpts = function <T>(
  remoteOpts: { name: string; id: T }[],
): OptionsType<T> {
  return remoteOpts.map((t) => ({ label: t.name, value: t.id }))
}
