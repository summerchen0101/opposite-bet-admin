import { Status, PlatformType, IPBlockType } from '@/lib/enums'

export interface PlaySetting {
  id: number

  home_score: number
  away_score: number
  odds: number
  bet_amount_limit: number
  single_bet_limit: number
  single_bet_least: number
  auto_odds_amount_unit: number
  auto_odds_rate_unit: number
  is_open_bet: boolean
  is_auto_odds: boolean
  is_active: boolean
  section_code: string
  play_code: string

  fix_odds: 0

  editor: string
  created_at: number
  updated_at: number
}

export interface CreatePlaySetting {
  home_score: number
  away_score: number
  odds: number
  bet_amount_limit: number
  single_bet_limit: number
  single_bet_least: number
  auto_odds_amount_unit: number
  auto_odds_rate_unit: number
  is_open_bet: boolean
  is_auto_odds: boolean
  is_active: boolean
  section_code: string
  play_code: string
}
export interface EditPlaySetting {
  id: number
  home_score: number
  away_score: number
  odds: number
  bet_amount_limit: number
  single_bet_limit: number
  single_bet_least: number
  auto_odds_amount_unit: number
  auto_odds_rate_unit: number
  is_open_bet: boolean
  is_auto_odds: boolean
  is_active: boolean
  section_code: string
  play_code: string
}

export interface SearchFields {
  section_code?: string
  play_code?: string
  page?: number
  perpage?: number
}
