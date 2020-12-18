import Request from '@/utils/request'
import { Permission } from './types'

interface Response {
  permissions: Permission[]
}

export const options = () => Request.get<Response>('admin_permission/options')
