import Request from '@/utils/request'
import { MethodType, ResponseBase } from '@/lib/types'

interface CreateRequestProps {
  method: 'ADD'
}

interface EditRequestProps {
  method: 'EDIT'
  admin_id?: number | string
}

type RequestProps = CreateRequestProps | EditRequestProps

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

export default (method: MethodType, id?: number): Promise<ResponseBase> => {
  const data: RequestProps = {
    method,
    admin_id: id,
  }
  return Request.post(`admin/editAdmin`, data)
}
