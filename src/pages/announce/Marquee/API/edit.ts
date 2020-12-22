import Request from '@/utils/request'
import { EditNews } from './types'

export const edit = (reqData: EditNews) =>
  Request.post<null>('marquee/edit', reqData)