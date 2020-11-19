import Request from '@/utils/request'

type RequestWithoutData = <T>() => Promise<T>
type RequestWithData = <T>(data: Record<string, any>) => Promise<T>
type RequestTypes = RequestWithData | RequestWithoutData

export const login: RequestWithData = <T>(data) =>
  Request.post<T>('admin/login', data, { noAuth: true })

export const logout: RequestWithoutData = <T>() =>
  Request.post<T>('admin/logout')

export const getUserAndMenu: RequestWithoutData = <T>() =>
  Request.post<T>('admin/getAdminPortal')
