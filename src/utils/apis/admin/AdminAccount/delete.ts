import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'

interface RequestProps {
  method: 'DELETE'
  admin_id: number
}

export default (id: number): Promise<ResponseBase> => {
  const data: RequestProps = {
    method: 'DELETE',
    admin_id: id,
  }
  return Request.post(`admin/storeAdmin`, data)
}
