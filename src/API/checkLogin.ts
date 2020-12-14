import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const checkLogin = () => Request.get<ResponseData>('check_login')
