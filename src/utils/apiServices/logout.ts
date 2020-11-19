import errCodes from '@/lib/errCodes'
import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import { toErrorMessage } from '../transfer'

export default async (): Promise<void> => {
  const { result } = await Request.post<ResponseBase<any>>('admin/logout')
  if (result !== 'SUCCESS') {
    console.log(toErrorMessage(result))
    throw toErrorMessage(result)
  }
  sessionStorage.removeItem('token')
  return
}
