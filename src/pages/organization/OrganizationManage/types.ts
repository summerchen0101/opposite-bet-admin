import { RemotePagination, RemotePermission } from '@/types'

export interface AgentItem {
  value?: number
  label: string
  children?: AgentItem[]
  disabled?: boolean
}

export interface DataTableItem {
  id: number
  name: string
  account: string
  role: number
  childCount: number
  parent: string
  subAccCount: number
  points: number
  bonus: number
  status: number
  whiteIpCount: string
  memberCount: number
  memberBalance: number
  failedLogin: number
  registerAt: string
  lastloginAt: string
  lastLoginIp: string
  updatedAt: string
  updator: string
}

interface RemoteAdminRole {
  id: number
  role_name: string
}

export interface RemoteAgent {
  NAME?: string
  [key: number]: RemoteAgent
}

export interface CreateOptionResponse {
  agent_struct: RemoteAgent
  admin_roles: RemoteAdminRole[]
}

export interface EditOptionResponse {
  agent_struct: RemoteAgent
  admin_roles: RemoteAdminRole[]
  agent: {
    agent_account: string
    agent_name: string
    agent_role: number
    status: number
  }
}

export interface CreateRequest {
  agent_role: number
  parent_id: number
  account_role: number
  agent_name: string
  agent_account: string
  password: string
  confirm_password: string
  status: number
}

export interface EditRequest {
  agent_id: number
  agent_role: number
  parent_id: number
  account_role: number
  agent_name: string
  agent_account: string
  password: string
  confirm_password: string
  status: number
}
