import Request from '@/utils/request'
import { RequestPromise } from '@/types'

export const login: RequestPromise = <T>(data) =>
  Request.post<T>('admin/login', data, { noAuth: true })

export const logout: RequestPromise = <T>() => Request.post<T>('admin/logout')

export const getUserAndMenu: RequestPromise = <T>() =>
  Request.post<T>('admin/getAdminPortal')
