import Request from '@/utils/request'

export interface Permission {
  id: number
  name: string
  route: string
}

interface Response {
  permissions: Permission[]
}

export const options = () => Request.get<Response>('admin_permission/options')
