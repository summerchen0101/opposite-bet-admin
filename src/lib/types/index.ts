export * from './admin'

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

export class ResponseBase<T> {
  result: string
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
  children?: MenuItem[]
}
