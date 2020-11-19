import { RemotePermission } from '@/lib/types'

export interface ResponseRoleItem {
  role_id: number
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  menu: string
}
