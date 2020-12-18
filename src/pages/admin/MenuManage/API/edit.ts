import Request from '@/utils/request'
import { EditMenuRequest } from './types'

export const edit = (reqData: EditMenuRequest) =>
  Request.post<null>('admin_menu/edit', reqData)
