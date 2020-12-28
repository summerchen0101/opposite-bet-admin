export interface Section {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreateSection {
  name: string
  code: string
  note: string
  is_active: boolean
}
export interface EditSection {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
}

export interface SectionOption {
  id: number
  name: string
}
