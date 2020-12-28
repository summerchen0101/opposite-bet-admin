import Request from '@/utils/request'
import { SectionOption } from './types'

interface ResponseData {
  list: SectionOption[]
}

export const options = () => Request.get<ResponseData>('sport_section/options')
