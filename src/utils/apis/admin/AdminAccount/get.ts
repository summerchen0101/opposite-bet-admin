import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'

interface RequestProps {
  method: 'EDIT'
  admin_id?: number | string
}

// interface ResponseProps {
//   result: string
//   data: {
//     admin_roles: {
//       [id: number]: {
//         role_name: string
//       }
//     }
//   }
// }

export default (id: number): Promise<ResponseBase<any>> => {
  const data: RequestProps = {
    method: 'EDIT',
    admin_id: id,
  }
  return Request.post(`admin/editAdmin`, data)
}
