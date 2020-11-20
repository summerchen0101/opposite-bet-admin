import Request from '@/utils/request'
import { RequestWithData, RequestWithoutData } from '@/lib/types'

export const login: RequestWithData = <T>(data) =>
  Request.post<T>('admin/login', data, { noAuth: true })

export const logout: RequestWithoutData = <T>() =>
  Request.post<T>('admin/logout')

export const getUserAndMenu: RequestWithoutData = <T>() =>
  Request.post<T>('admin/getAdminPortal')
