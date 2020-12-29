import Request from '@/utils/request'
import { EditFaq } from './types'

export const edit = (reqData: EditFaq) => Request.post<null>('qa/edit', reqData)
