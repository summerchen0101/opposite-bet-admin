import Request from '@/utils/request'
import { Permission } from './types'

interface Response {
  list: Permission[]
}

export const options = () => Request.get<Response>('admin_permission/options')
