import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchOption = () => Request.get<ResponseData>('admin_role/options')
