import Request from '@/utils/request'
import { CreatePlaySetting } from './types'

export const create = (reqData: CreatePlaySetting) =>
  Request.post<null>('opposite_odds/add', reqData)
