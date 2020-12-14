import Request from '@/utils/request'

export const edit = (reqData: any) =>
  Request.post<any>('admin_user/edit', reqData)
