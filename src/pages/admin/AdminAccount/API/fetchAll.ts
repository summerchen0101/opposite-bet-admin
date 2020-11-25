import Request from '@/utils/request'
import { ListResponse, SearchRequest } from './types'

export const fetchAll = (reqData?: SearchRequest) =>
  Request.post<ListResponse>('admin/getAdminList', reqData)
