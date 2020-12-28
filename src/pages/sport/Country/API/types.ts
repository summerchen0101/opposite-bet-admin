export interface Country {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreateCountry {
  name: string
  code: string
  note: string
  is_active: boolean
}
export interface EditCountry {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
}

export interface CountryOptions {
  id: number
  name: string
}
