import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
export * from './admin'
import errCodes from '@/lib/errCodes'

export const getUserList = (id) => {
  return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

interface LoginResponse {
  result: string
  token: string
}

// 登入
export const login = async (data): Promise<string> => {
  const res = await Request.post<LoginResponse>('admin/login', data, {
    noAuth: true,
  })
  if (res.result !== 'SUCCESS') {
    throw new Error(errCodes[res.result])
  }
  sessionStorage.setItem('token', res.token)
  return res.token
}
// 取得登入資訊(選單及登入者資料)
export const getUserInfo = () => {
  return Request.post<any>('admin/getAdminPortal')
}
