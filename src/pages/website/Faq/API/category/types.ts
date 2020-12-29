export interface FaqCategory {
  id: number
  name: string
  sort: number
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreateFaqCategory {
  name: string
  sort: number
  is_active: boolean
}
export interface EditFaqCategory {
  id: number
  name: string
  sort: number
  is_active: boolean
}

export interface FaqCategoryOption {
  id: number
  name: string
}
