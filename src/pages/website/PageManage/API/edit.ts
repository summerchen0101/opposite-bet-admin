import Request from '@/utils/request'
import { EditPage } from './types'

export const edit = (reqData: EditPage) =>
  Request.post<null>('page/edit', reqData)
