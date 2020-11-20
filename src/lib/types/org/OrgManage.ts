import { RemotePagination, RemotePermission } from '..'

export interface DataTableItem {
  key: number
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
export interface RemoteAgentItem {
  agent_id: number
  agent_name: string
  agent_account: string
  agent_role: string
  upper_link: string
  lower_link: string
  sub_account: string
  points: string
  bonus: string
  status: number
  allow_ip: string
  member_count: string
  member_balance: string
}

export interface SearchRequest {
  search_account?: string
  search_role?: string
  search_status?: number
  search_ip?: string
}

export interface ListResponse {
  permission: RemotePermission
  agent: RemoteAgentItem[]
  paging: RemotePagination
}

interface RemoteAdminRole {
  id: number
  role_name: string
}

interface RemoteAgentSub {
  NAME: string
  [key: number]: RemoteAgentSub
}

interface RemoteAgentRoot {
  [key: number]: RemoteAgentSub
}

export interface CreateOptionResponse {
  agent_struct: {
    [key: number]: RemoteAgentSub
  }
  admin_roles: RemoteAdminRole[]
}

export interface EditOptionResponse {
  agent_struct: RemoteAgentRoot
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
