export interface Sport {
  id: number
  code: string
  country_id: number
  created_at: number
  is_active: boolean
  name: string
  note: string
  updated_at: number
}
export type CreateSport = {
  code: string
  name: string
  country_id: number
  note: string
  is_active: boolean
}

export type EditSport = {
  id: number
  code: string
  name: string
  country_id: number
  note: string
  is_active: boolean
}

export interface SearchFields {
  page?: number
  perpage?: number
}
