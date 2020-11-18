import { LoginFormData, ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
export * from './admin'
import errCodes from '@/lib/errCodes'

interface RequestProps {
  username: string
  password: string
}

interface LoginResponse {
  result: string
  token: string
}

export default async (data: LoginFormData): Promise<string> => {
  const reqData: RequestProps = { ...data }
  const res = await Request.post<LoginResponse>('admin/login', reqData, {
    noAuth: true,
  })
  if (res.result !== 'SUCCESS') {
    throw new Error(errCodes[res.result])
  }
  sessionStorage.setItem('token', res.token)
  return res.token
}
