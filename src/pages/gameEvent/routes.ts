import * as pages from '@/pages/gameEvent'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

const rootName = '賽事管理'
const rootPath = '/event'

// PAGES
export const EventManager = new PageG(
  '賽事列表',
  `${rootPath}/list`,
  pages.EventManager,
  {
    exact: true,
  },
)
export const EventScore = new PageG(
  '比分',
  `${rootPath}/score`,
  pages.EventScore,
)
export const UploadEvent = new PageG(
  '上架賽事',
  `${rootPath}/upload`,
  pages.UploadEvent,
)
export const BettingHistory = new PageG(
  '下注紀錄',
  `${rootPath}/betting-history`,
  pages.BettingHistory,
)
export const DefaultOdds = new PageG(
  '默認賠率',
  `${rootPath}/odds`,
  pages.DefaultOdds,
)

// ROUTERS
RouteG.create([
  EventManager,
  EventScore,
  UploadEvent,
  BettingHistory,
  DefaultOdds,
])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [
  EventManager,
  UploadEvent,
  BettingHistory,
  DefaultOdds,
])
