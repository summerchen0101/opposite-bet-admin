import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const logout = () => Request.post<ResponseData>('admin/logout')
