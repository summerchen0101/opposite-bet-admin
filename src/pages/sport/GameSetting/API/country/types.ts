export interface Country {
  id: number
  code: string
  created_at: number
  is_active: boolean
  name: string
  note: string
  updated_at: number
}
export type CreateCountry = {
  code: string
  name: string
  note: string
  is_active: boolean
}

export type EditCountry = {
  id: number
  code: string
  name: string
  note: string
  is_active: boolean
}

export interface CountrySearchFields {
  page?: number
  perpage?: number
}
