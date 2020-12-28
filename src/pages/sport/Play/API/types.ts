export interface Play {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreatePlay {
  name: string
  code: string
  note: string
  is_active: boolean
}
export interface EditPlay {
  id: number
  name: string
  code: string
  note: string
  is_active: boolean
}

export interface PlayOption {
  id: number
  name: string
}
