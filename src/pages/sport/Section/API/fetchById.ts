import Request from '@/utils/request'
import { Section } from './types'

export const fetchById = (id: number) =>
  Request.get<Section>(`sport_section/view/${id}`)
