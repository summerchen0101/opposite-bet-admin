export interface Faq {
  id: number
  catalogue_id: string
  title: string
  content: string
  content_mobile: string
  is_active: boolean
  created_at: number
  updated_at: number
}
export interface CreateFaq {
  catalogue_id: string
  title: string
  content: string
  content_mobile: string
  is_active: boolean
}
export interface EditFaq {
  id: number
  catalogue_id: string
  title: string
  content: string
  content_mobile: string
  is_active: boolean
}

export interface FaqOption {
  id: number
  name: string
}
