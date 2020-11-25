import Request from '@/utils/request'
import { ListResponse } from './types'

export const fetchAll = () => Request.get<ListResponse>('admin/getAdminList')
