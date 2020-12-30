import { Status } from '@/lib/enums'

export interface Game {
  id: number
  name: string
  code: string
  note: string
  country: {
    code: string
    id: number
    name: string
  }
  sport: {
    code: string
    country_id: number
    id: number
    name: string
  }
  is_active: boolean
  created_at: number
  updated_at: number
}

export interface CreateGame {
  name: string
  code: string
  note: string
  country_id: number
  sport_id: number
  is_active: boolean
}
export interface EditGame {
  id: number
  name: string
  code: string
  note: string
  country_id: number
  sport_id: number
  is_active: boolean
}

export interface GameOption {
  id: number
  name: string
}

export interface GameSearch {
  country_id?: number
  sport_id?: number
  is_active?: Status
  page?: number
  perpage?: number
}
