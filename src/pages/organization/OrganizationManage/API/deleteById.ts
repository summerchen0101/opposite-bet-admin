import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const deleteById = (id: string) =>
  Request.post<ResponseData>('admin/editAdmin', { id })
