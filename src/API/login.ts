import Request from '@/utils/request'

interface RequestData {
  username: string
  password: string
}

export const login = (reqData: RequestData) =>
  Request.post<string>('admin/login', reqData)
