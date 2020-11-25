import Request from '@/utils/request'
import { RequestPromise } from '@/types'
import * as OrgManage from './types'

// export const getList: RequestPromise = <T>(
//   data?: Partial<OrgManage.SearchRequest>,
// ) => Request.post<T>('admin/getAgentList', data)

// export const create: RequestPromise = <T>() =>
//   Request.post<T>('admin/editAgent', { method: 'ADD' })

// export const edit: RequestPromise = <T>(id: number) =>
//   Request.post<T>('admin/editAgent', { method: 'EDIT', role_id: id })

// export const doCreate: RequestPromise = <T>(data: OrgManage.DoCreateRequest) =>
//   Request.post<T>('admin/storeAgent', { method: 'ADD', ...data })

// export const doEdit: RequestPromise = <T>(data: OrgManage.DoEditRequest) =>
//   Request.post<T>('admin/storeAgent', { method: 'EDIT', ...data })

// export const doDelete: RequestPromise = <T>(id) =>
//   Request.post<T>('admin/storeAgent', { method: 'DELETE', role_id: id })
