import { MessageType } from '@/pages/announce/Message/API/types'
import { NewsType } from '../pages/announce/AnnounceManage/API/types'
import bankCodes from './bankCodes'
import countries from './countries'
import {
  Device,
  IPBlockType,
  LevelCode,
  PlatformType,
  Status,
  YesNo,
  Language,
  Currency,
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
