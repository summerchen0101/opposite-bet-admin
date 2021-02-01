import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const options = () => Request.get<ResponseData>('admin_user/options')
