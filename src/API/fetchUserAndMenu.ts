import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchUserAndMenu = () =>
  Request.post<ResponseData>('admin/getAdminPortal')
