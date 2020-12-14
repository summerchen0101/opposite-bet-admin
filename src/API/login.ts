import Request from '@/utils/request'

interface RequestData {
  acc: string
  pass: string
}

export const login = (reqData: RequestData) =>
  Request.post<null>('login', reqData)
