import { ColumnsType } from 'antd/lib/table'

type RemotePermissionType = 'Y' | 'N'
export type StatusType = 1 | 0

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

export interface Permission {
  view: boolean
  edit: boolean
}
export type RequestPromise = <T>(data?: unknown) => Promise<T>

export class ResponseBase<T> {
  code: number
  data: T
}

export type MethodType = 'ADD' | 'EDIT'

export interface OptionType {
  label: string
  value: string | number
}

export interface LoginFormData {
  account: string
  password: string
}

export interface UserInfo {
  name: string
  role: string
}

export interface MenuItem {
  id: number
  name: string
  permission?: Permission
  parent?: number
  children?: MenuItem[]
}

export interface DataDataFormProps {
  values: any
  onFinish?: (values: any) => void
  onFinishFailed?: (values: any) => void
}

export interface RequestSetStatus {
  data_id: number
  status: number
}

type OptionValue = string | number
type Option<T extends OptionValue> = {
  value: T
  label: string
}
type SelectProps<T extends OptionValue> = {
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}

export type ColumnsGenerator<T> = (data: T[]) => ColumnsType<T>
