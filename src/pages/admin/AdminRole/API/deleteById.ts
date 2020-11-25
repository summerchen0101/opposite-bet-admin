import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const deleteById = (role_id: string) =>
  Request.post<ResponseData>('admin/storeAdminRole', {
    method: 'DELETE',
    role_id,
  })
