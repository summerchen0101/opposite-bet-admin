import * as pages from '@/pages/game'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

const rootName = '賽事管理'
const rootPath = '/game'

// PAGES
export const CheckInEvents = new PageG(
  '賽事列表',
  `${rootPath}/checkin`,
  pages.CheckInEvents,
)
export const EventControl = new PageG(
  '控盤',
  `${rootPath}/control`,
  pages.EventControl,
)

export const CheckoutEvents = new PageG(
  '已結單賽事',
  `${rootPath}/checkout`,
  pages.CheckoutEvents,
)

export const ManualReview = new PageG(
  '賽事結帳',
  `${rootPath}/manual-review`,
  pages.ManualReview,
)

// ROUTERS
RouteG.create([CheckInEvents, CheckoutEvents, ManualReview, EventControl])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [
  CheckInEvents,
  CheckoutEvents,
  ManualReview,
])
