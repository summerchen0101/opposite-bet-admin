import Request from '@/utils/request'
import { ResponseBase } from '@/lib/types'

export default (id?: number | string): Promise<ResponseBase> => {
  const data = {
    admin_id: id,
    name: '',
    username: '',
  }
  return Request.post(`admin/storeAdmin`, data)
}
