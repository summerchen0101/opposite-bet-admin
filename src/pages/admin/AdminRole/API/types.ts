import { RemotePermission } from '@/types'

/**
 * Requesst & Response
 */

export interface ResponseTableItem {
  role_id: string
  role_name: string
  used_count: number
  created_at: string
  createtor: string
  updated_at: string
  updator: string
  status: number
  menu: string
}

export interface ListResponse {
  permission: RemotePermission
  role: ResponseTableItem[]
}
