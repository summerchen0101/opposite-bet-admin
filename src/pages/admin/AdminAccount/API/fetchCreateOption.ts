import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchCreateOption = () =>
  Request.post<ResponseData>('admin/editAdmin', { method: 'ADD' })
