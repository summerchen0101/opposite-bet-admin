import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

// export default () => Request.get<ResponseData>('check_login')
export default () => Promise.resolve({ data: true, code: 0 })
