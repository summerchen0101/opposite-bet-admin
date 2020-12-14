import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export default () => Request.post<ResponseData>('admin/logout')
