import { ColumnsType } from 'antd/lib/table'
import { LevelCode } from './enums'

type RemotePermissionType = 'Y' | 'N'

export interface RemotePermission {
  VIEW: RemotePermissionType
  EDIT: RemotePermissionType
}

export interface RemotePagination {
  page_nums: number
  total_rows: number
  current_page: number
  total_pages: number
}

export class ResponseBase<T> {
  code: number
  data: T
}

export interface OptionType {
  label: string
  value: string | number
}

export interface LoginFormData {
  account: string
  password: string
}

export interface MenuItem {
  id: number
  name: string
  permission?: any
  parent?: number
  children?: MenuItem[]
}

export type ColumnsGenerator<T> = (data: T[]) => ColumnsType<T>

export type LevelCodeOpts = keyof typeof LevelCode

export interface Option<T> {
  label: string
  value: T
}
export type OptionsType<T> = Option<T>[]
