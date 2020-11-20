import Request from '@/utils/request'
import { RequestWithData, RequestWithoutData } from '@/lib/types'

export const getList: RequestWithData = <T>(data) =>
  Request.post<T>('admin/getAdminRoles', data)

export const create: RequestWithData = <T>() =>
  Request.post<T>('admin/getAdminRoles', { method: 'ADD' })

export const edit: RequestWithData = <T>(id) =>
  Request.post<T>('admin/getAdminRoles', { method: 'EDIT', role_id: id })

export const doCreate: RequestWithData = <T>(data) =>
  Request.post<T>('admin/storeAdminRole', { method: 'ADD', ...data })

export const doEdit: RequestWithData = <T>(data) =>
  Request.post<T>('admin/storeAdminRole', { method: 'EDIT', ...data })

// export const doDelete: RequestWithData = <T>(id) =>
//   Request.post<T>('admin/storeAdminRole', { method: 'DELETE', role_id: id })
