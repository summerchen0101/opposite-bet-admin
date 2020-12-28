export interface Message {
  id: number
  title: string
  content: string

  created_at: number
  updated_at: number

  is_all: boolean
  member_type: MessageType
  read_count: number
  receiver_accs: string[]
  sender: string
}

export type CreateMessage = {
  member_type: MessageType
  title: string
  content: string
  receivers: string[]
}

export interface SearchFields {
  title: string
  member_type: MessageType
}

export enum MessageType {
  Member = 1,
  Agent = 2,
}
