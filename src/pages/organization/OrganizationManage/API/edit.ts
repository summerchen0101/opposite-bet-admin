import Request from '@/utils/request'
interface ResponseData {
  [key: string]: any
}
interface RequestData {
  [key: string]: any
}

export const edit = (id: string, reqData: RequestData) =>
  Request.post<ResponseData>('admin/storeAgent', {
    method: 'EDIT',
    id,
    ...reqData,
  })
