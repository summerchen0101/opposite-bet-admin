import errCodes from '@/lib/errCodes'
import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'

export default async (): Promise<void> => {
  const res = await Request.post<ResponseBase<any>>('admin/logout')
  if (res.result !== 'SUCCESS') {
    throw new Error(errCodes[res.result])
  }
  sessionStorage.removeItem('token')
  return
}
