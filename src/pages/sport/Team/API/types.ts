import { Status } from '@/lib/enums'

export interface Team {
  id: number
  name: string
  // bet365_code: string
  note: string
  // country: {
  //   code: string
  //   id: number
  //   name: string
  // }
  // sport: {
  //   code: string
  //   country_id: number
  //   id: number
  //   name: string
  // }
  // game: {
  //   code: string
  //   country_id: number
  //   sport_id: number
  //   id: number
  //   name: string
  // }
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
  // country_id: number
  // sport_id: number
  // game_id: number
  league_id: number
  is_active: boolean
}
export interface EditTeam {
  id: number
  name: string
  note: string
  // country_id: number
  // sport_id: number
  // game_id: number
  league_id: number
  is_active: boolean
}

export interface TeamOption {
  id: number
  name: string
}

export interface TeamSearch {
  // country_id?: number
  // sport_id?: number
  // game_id?: number
  league_id?: number
  is_active?: Status
  page?: number
  perpage?: number
}
