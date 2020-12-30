export interface MemberTag {
  id: number

  name: string
  content: string
  member_count: number

  editor: string
  created_at: number
  updated_at: number
}

export interface CreateMemberTag {
  name: string
  content: string
}
export interface EditMemberTag {
  id: number
  name: string
  content: string
}

export interface SearchFields {
  name?: string
  page?: number
  perpage?: number
}
