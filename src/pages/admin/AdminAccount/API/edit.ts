import Request from '@/utils/request'
import { ResponseTableItemSchema, AdminRoleOption } from './types'
export interface ResponseData {
  admin_roles: AdminRoleOption[]
  admin: ResponseTableItemSchema
}

export interface RequestData extends ResponseTableItemSchema {
  admin_id: string
}

export const edit = (id: string, reqData: RequestData) =>
  Request.post<ResponseData>('admin/editAdmin', { id, ...reqData })
