import Request from '@/utils/request'
import { ListResponse } from './types'

export interface SearchRequest {
  search_account?: string
  search_role?: string
  search_status?: number
  search_ip?: string
}

export const fetchAll = (reqData?: SearchRequest) =>
  Request.post<ListResponse>('admin/getAdminList', reqData)
