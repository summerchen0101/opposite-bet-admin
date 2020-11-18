import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
export * from './admin'
import errCodes from '@/lib/errCodes'

export const getUserList = (id) => {
  return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

export { default as login } from './login'
export { default as getUserAndMenu } from './getUserAndMenu'

// 取得登入資訊(選單及登入者資料)
export const getUserInfo = () => {
  return Request.post<any>('admin/getAdminPortal')
}
