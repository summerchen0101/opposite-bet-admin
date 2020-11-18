import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'
import { toErrorMessage } from '@/utils/transfer'

interface RequestProps {
  method: 'DELETE'
  admin_id: number
}
interface ResponseProps {
  result: string
}

export default async (id: number): Promise<void> => {
  const data: RequestProps = {
    method: 'DELETE',
    admin_id: id,
  }
  const { result } = await Request.post<ResponseProps>(`admin/storeAdmin`, data)
  if (result !== 'SUCCESS') {
    throw toErrorMessage(result)
  }
}
