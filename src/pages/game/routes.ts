import * as pages from '@/pages/game'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

const rootName = '賽事管理'
const rootPath = '/game'

// PAGES
export const GameManage = new PageG(
  '賽事列表',
  `${rootPath}/manage`,
  pages.GameManage,
)
export const GameControlPanel = new PageG(
  '控盤',
  `${rootPath}/manage/ctrl`,
  pages.GameControlPanel,
)
export const CheckoutManage = new PageG(
  '已結單賽事(deprecated)',
  `${rootPath}/manage/checkout`,
  pages.CheckoutManage,
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
RouteG.create([GameManage, CheckoutEvents, ManualReview])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [
  GameManage,
  CheckoutManage,
  CheckoutEvents,
  ManualReview,
])
