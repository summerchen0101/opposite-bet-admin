import { ColumnsType } from 'antd/lib/table'
import { LevelCode } from './enums'

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

export interface RemotePagination {
  total_count: number
  total_page: number
}
