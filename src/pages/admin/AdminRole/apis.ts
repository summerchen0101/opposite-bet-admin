import Request from '@/utils/request'
import { RequestPromise } from '@/types'
import * as AdminRole from './types'

export const getList: RequestPromise = <T>() =>
  Request.post<T>('admin/getAdminRoles')

export const create: RequestPromise = <T>() =>
  Request.post<T>('admin/getAdminRoles', { method: 'ADD' })

export const edit: RequestPromise = <T>(id: number) =>
  Request.post<T>('admin/getAdminRoles', { method: 'EDIT', role_id: id })

export const doCreate: RequestPromise = <T>(data: AdminRole.DoCreateRequest) =>
  Request.post<T>('admin/storeAdminRole', { method: 'ADD', ...data })

export const doEdit: RequestPromise = <T>(data: AdminRole.DoEditRequest) =>
  Request.post<T>('admin/storeAdminRole', { method: 'EDIT', ...data })

export const doDelete: RequestPromise = <T>(id) =>
  Request.post<T>('admin/storeAdminRole', { method: 'DELETE', role_id: id })

export const setStatus: RequestPromise = <T>(data) =>
  Request.post<T>('admin/commonStatusChanger', {
    module_id: 'AdminRole',
    ...data,
  })
