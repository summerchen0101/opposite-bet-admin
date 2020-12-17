import { Status } from '@/lib/enums'
import { Permission } from '@/pages/admin/AdminRole/API/types'

export enum BlockStatus {
  Normal = 1, // 正常
  Blocked = 2, // 鎖定
}

interface Role {
  id: number
  name: string
}
export interface User {
  id: number
  acc: string
  pass: string
  name: string
  roles: Role[]
  permissions: Permission[]
  is_active: boolean
  status: BlockStatus

  login_ip: string
  logined_at: number
  created_at: number
  updated_at: number
}

export interface SearchFields {
  acc?: string
  role_id?: number
  is_active?: Status
  status?: BlockStatus
  ip?: string
}
