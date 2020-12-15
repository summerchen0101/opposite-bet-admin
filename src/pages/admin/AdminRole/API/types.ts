export interface Permission {
  id: number
  name: string
  route: string
}
export interface Role {
  created_at: number
  id: number
  is_active: boolean
  name: string
  permissions: Permission[]
  updated_at: number
}
