import Request from '@/utils/request'
import { EditBanner } from './types'

export const edit = (reqData: EditBanner) =>
  Request.post<null>('banner/edit', reqData)
