import Request from '@/utils/request'

interface ResponseData {
  [key: string]: any
}

export const fetchCreateOption = () =>
  Request.get<ResponseData>('admin/editAdmin')
