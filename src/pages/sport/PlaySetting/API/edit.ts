import Request from '@/utils/request'
import { EditPlaySetting } from './types'

export const edit = (reqData: EditPlaySetting) =>
  Request.post<null>('opposite_odds/edit', reqData)
