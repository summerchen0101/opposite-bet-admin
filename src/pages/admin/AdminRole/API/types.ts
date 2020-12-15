export interface Permission {
  id: number
  name: string
  route: string
}
export interface Role {
  id: number
  is_active: boolean
  name: string
  permissions: Permission[]
  created_at: number
  updated_at: number
}
