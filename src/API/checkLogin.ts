import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export default () => Request.get<ResponseData>('check_login')
