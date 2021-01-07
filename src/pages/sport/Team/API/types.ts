import { Status } from '@/lib/enums'

export interface Team {
  id: number
  name: string
  name_en: string
  note: string
  league: {
    game_id: number
    id: number
    name: string
  }
  is_active: boolean
  created_at: number
  updated_at: number
}

export interface CreateTeam {
  name: string
  note: string
  league_id: number
  is_active: boolean
}
export interface EditTeam {
  id: number
  name: string
  note: string
  league_id: number
  is_active: boolean
}

export interface TeamOption {
  id: number
  name: string
}

export interface TeamSearch {
  league_id?: number
  is_active?: Status
  page?: number
  perpage?: number
}
