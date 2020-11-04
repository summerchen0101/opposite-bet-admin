import * as routes from '@/lib/routes'
import * as pages from '@/pages/gameEvent'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

// PAGES
export const EventManager = new PageG(
  '賽事列表',
  routes.EventManager,
  pages.EventManager,
  {
    exact: true,
  },
)
export const EventScore = new PageG('比分', routes.EventScore, pages.EventScore)
export const UploadEvent = new PageG(
  '上架賽事',
  routes.UploadEvent,
  pages.UploadEvent,
)
export const BettingHistory = new PageG(
  '下注紀錄',
  routes.BettingHistory,
  pages.BettingHistory,
)
export const DefaultOdds = new PageG(
  '默認賠率',
  routes.DefaultOdds,
  pages.DefaultOdds,
)
export const EventRule = new PageG(
  '賽事規則',
  routes.EventRule,
  pages.EventRule,
)

// ROUTERS
RouteG.create([
  EventManager,
  EventScore,
  UploadEvent,
  BettingHistory,
  DefaultOdds,
  EventRule,
])

// MENU
MenuG.createCategory('賽事管理', routes.Event, DribbbleOutlined, [
  EventManager,
  UploadEvent,
  BettingHistory,
  DefaultOdds,
  EventRule,
])
