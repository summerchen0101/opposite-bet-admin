import { NewsType } from '../pages/announce/AnnounceManage/API/types'
import { Device, IPStatus, LevelCode, Status, YesNo } from './enums'

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
  { label: '全部', value: YesNo.ALL },
  { label: '是', value: YesNo.YES },
  { label: '否', value: YesNo.NO },
]
export const deviceOpts = [
  { label: '桌上型電腦', value: Device.PC },
  { label: '手機', value: Device.Mobile },
]
export const ipStatusOpts = [
  { label: '黑名單', value: IPStatus.Black },
  { label: '白名單', value: IPStatus.White },
]
