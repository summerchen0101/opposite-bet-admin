import Request from '@/utils/request'
import { RequestWithData, RequestWithoutData } from '@/lib/types'

export const getList: RequestWithData = <T>(data) =>
  Request.post<T>('admin/getAdminList', data)

export const create: RequestWithoutData = <T>() =>
  Request.post<T>('admin/editAdmin', { method: 'ADD' })

export const edit: RequestWithData = <T>(id: number) =>
  Request.post<T>('admin/editAdmin', { method: 'EDIT', admin_id: id })

export const doCreate: RequestWithData = <T>(data) =>
  Request.post<T>('admin/storeAdmin', { method: 'ADD', ...data })

export const doEdit: RequestWithData = <T>(data) =>
  Request.post<T>('admin/storeAdmin', { method: 'EDIT', ...data })

export const doDelete: RequestWithData = <T>(id) =>
  Request.post<T>('admin/storeAdmin', { method: 'DELETE', admin_id: id })
