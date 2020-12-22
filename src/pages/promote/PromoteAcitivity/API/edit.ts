import Request from '@/utils/request'
import { EditActivity } from './types'

export const edit = (reqData: EditActivity) =>
  Request.post<null>('activity/edit', reqData)
