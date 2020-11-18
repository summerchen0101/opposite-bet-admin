import { ResponseBase } from '@/lib/types'
import Request from '@/utils/request'

interface RequestProps {
  method: 'ADD'
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

export default (): Promise<ResponseBase<any>> => {
  const data: RequestProps = {
    method: 'ADD',
  }
  return Request.post(`admin/editAdmin`, data)
}
