import { LoginFormData, ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import errCodes from '@/lib/errCodes'
import { toErrorMessage } from '../transfer'

interface RequestProps {
  username: string
  password: string
}

interface LoginResponse {
  result: string
  token: string
}

export default async (form: LoginFormData): Promise<string> => {
  const reqData: RequestProps = {
    username: form.account,
    password: form.password,
  }
  const { token, result } = await Request.post<LoginResponse>(
    'admin/login',
    reqData,
    {
      noAuth: true,
    },
  )
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
  sessionStorage.setItem('token', token)
  return token
}
