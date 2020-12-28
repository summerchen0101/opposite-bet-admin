import Request from '@/utils/request'
import { EditSection } from './types'

export const edit = (reqData: EditSection) =>
  Request.post<null>('sport_section/edit', reqData)
