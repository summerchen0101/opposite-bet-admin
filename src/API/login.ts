import Request from '@/utils/request'

interface RequestData {
  username: string
  password: string
}
interface ResponseData {
  result: string
  token: string
}

export const login = (reqData: RequestData) =>
  Request.purePost<ResponseData>('admin/login', reqData)
