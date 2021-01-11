import { MessageType } from '@/pages/announce/Message/API/types'
import { NewsType } from '../pages/announce/AnnounceManage/API/types'
import bankCodes from './bankCodes'
import countries from './countries'
import { GameStatus, PointOperateType } from '@/lib/enums'
import {
  Device,
  IPBlockType,
  LevelCode,
  PlatformType,
  Status,
  YesNo,
  Language,
  Currency,
  EventReviewStatus,
  WinSideTeam,
} from './enums'

export const newsTypeOpts = [
  { label: '全部', value: NewsType.ALL },
  { label: '系統通知', value: NewsType.System },
  { label: '賽事公告', value: NewsType.Game },
  { label: '活動優惠', value: NewsType.Activity },
]

export const levelOpts = [
  { label: '廠商', value: LevelCode.Vendor },
  { label: '股東', value: LevelCode.Shareholder },
  { label: '總代理', value: LevelCode.MajorAgent },
  { label: '代理', value: LevelCode.Agent },
  { label: '會員', value: LevelCode.Member },
]
export const statusOpts = [
  { label: '全部', value: Status.ALL },
  { label: '啟用', value: Status.ON },
  { label: '停用', value: Status.OFF },
]
export const yesNoOpts = [
  { label: '是', value: YesNo.YES },
  { label: '否', value: YesNo.NO },
]
export const deviceOpts = [
  { label: '桌上型電腦', value: Device.PC },
  { label: '手機', value: Device.Mobile },
]
export const IPBlockTypeOpts = [
  { label: '黑名單', value: IPBlockType.Black },
  { label: '白名單', value: IPBlockType.White },
]
export const messageTypeOpts = [
  { label: '會員', value: MessageType.Member },
  { label: '代理', value: MessageType.Agent },
]
export const platformTypeOpts = [
  { label: '管端', value: PlatformType.Admin },
  { label: '代理端', value: PlatformType.Agent },
  { label: '會員端', value: PlatformType.Member },
]

export const countryOpts = countries.map((t) => ({
  label: t.name,
  value: t.alpha3.toUpperCase(),
}))

export const langOpts = [{ label: '簡體中文', value: Language.CN }]
export const currencyOpts = [{ label: '人民幣', value: Currency.CN }]
export const pointControlOpts = [
  { label: '存入', value: 1 },
  { label: '提出', value: 2 },
]

export const bankCodeOpts = bankCodes.map((t) => ({
  label: `${t.name}(${t.code})`,
  value: t.code,
}))

export const eventReviewStatusOpts = [
  { label: '未結帳', value: EventReviewStatus.Pending },
  { label: '結帳中', value: EventReviewStatus.Proccessing },
  { label: '已結帳', value: EventReviewStatus.Done },
]

export const winSideTeamOpts = [
  { label: '主', value: WinSideTeam.Home },
  { label: '客', value: WinSideTeam.Away },
  { label: '和', value: WinSideTeam.Even },
]

export const perpageOpts = [
  { label: '10筆', value: 10 },
  { label: '20筆', value: 20 },
  { label: '50筆', value: 50 },
]

export const paywayOpts = [
  { label: '網路匯款', value: 1 },
  { label: 'ATM付款', value: 2 },
  { label: 'CDM付款', value: 3 },
  { label: '臨櫃', value: 4 },
  { label: '未知', value: 5 },
]

export const thirdPartyOpts = [{ label: '57PAY', value: 1 }]

export const depositOpts = [
  { label: '人工加錢', value: 1 },
  { label: '人工自訂優惠', value: 2 },
  { label: '人工補點', value: 3 },
]
export const withdrawOpts = [
  { label: '人工扣錢', value: 1 },
  { label: '放棄優惠', value: 2 },
  { label: '扣除非法下注派彩', value: 3 },
]

export const pointOperateOpts = [
  { label: '加錢', value: PointOperateType.Add },
  { label: '扣錢', value: PointOperateType.Subtract },
]
export const gameStatusOpts = [
  { label: '盤前', value: GameStatus.Waiting },
  { label: '走地', value: GameStatus.Proccessing },
  { label: '完賽', value: GameStatus.Done },
  { label: '取消', value: GameStatus.Cancel },
  { label: '延期', value: GameStatus.Postpone },
]

export const sectionOpts = [
  { label: '全場', value: 'F' },
  { label: '上半場', value: 'FH' },
  { label: '下半場', value: 'SH' },
  { label: '第一節', value: 'Q1' },
  { label: '第二節', value: 'Q2' },
  { label: '第三節', value: 'Q3' },
  { label: '第四節', value: 'Q4' },

  { label: '走地全場', value: 'FL' },
  { label: '走地上半場', value: 'FHL' },
  { label: '走地下半場', value: 'SHL' },
  { label: '走地第一節', value: 'QL1' },
  { label: '走地第二節', value: 'QL2' },
  { label: '走地第三節', value: 'QL3' },
  { label: '走地第四節', value: 'QL4' },
]

export const playOpts = [
  { label: '大小', value: 'OU' },
  { label: '搶首分', value: 'FG' },
  { label: '讓分', value: 'H' },
  { label: '和局', value: 'D' },
  { label: '搶尾分', value: 'LG' },
  { label: '獨贏', value: 'PK' },
  { label: '單雙', value: 'OE' },
  { label: '一輸二贏', value: 'OPFH' },
  { label: '波膽', value: 'CS' },
  { label: '反波膽', value: 'NCS' },
]
