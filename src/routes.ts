import Home from '@/pages/Home'
import Login from '@/pages/Login'
import EventManager from '@/pages/gameEvent/EventManager'
import EventScore from '@/pages/gameEvent/EventScore'
import UploadEvent from '@/pages/gameEvent/UploadEvent'
import BettingHistory from '@/pages/gameEvent/BettingHistory'
import DefaultOdds from '@/pages/gameEvent/DefaultOdds'
import EventRule from '@/pages/gameEvent/EventRule'
import MemberActivity from '@/pages/member/memberActivity'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import * as routes from '@/lib/routes'

// PAGES
export const home = new PageG('首頁', '/', Home, { exact: true })
const login = new PageG('登入頁', '/login', Login)
export const eventManager = new PageG(
  '賽事列表',
  routes.eventManager,
  EventManager,
  {
    exact: true,
  },
)
export const eventScore = new PageG('比分', routes.eventScore, EventScore)
export const uploadEvent = new PageG(
  '上架賽事',
  routes.uploadEvent,
  UploadEvent,
)
export const bettingHistory = new PageG(
  '下注紀錄',
  routes.bettingHistory,
  BettingHistory,
)
export const defaultOdds = new PageG(
  '默認賠率',
  routes.defaultOdds,
  DefaultOdds,
)
export const eventRule = new PageG('賽事規則', routes.eventRule, EventRule)
// 會員管理
export const memberActivity = new PageG(
  '會員活躍情況',
  routes.memberActivity,
  MemberActivity,
)

// ROUTERS
const routeG = new RouteG([
  login,
  home,
  // 賽事管理
  eventManager,
  eventScore,
  uploadEvent,
  bettingHistory,
  defaultOdds,
  eventRule,
  // 會員管理
  memberActivity,
])

// MENU
const menuG = new MenuG()
menuG.createCategory('賽事管理', routes.event, null, [
  eventManager,
  uploadEvent,
  bettingHistory,
  defaultOdds,
  eventRule,
])
menuG.createCategory('會員管理', routes.member, null, [memberActivity])
menuG.createCategory('組織管理', routes.organization, null, [])
menuG.createCategory('金流管理', routes.payment, null, [])
menuG.createCategory('報表', routes.report, null, [])
menuG.createCategory('活動管理', routes.promote, null, [])
menuG.createCategory('管理者管理', routes.admin, null, [])
menuG.createCategory('系統管理', routes.system, null, [])
menuG.createCategory('網站管理', routes.website, null, [])

export const rootRoutes = routeG.getRootRoutes()
export const menu = menuG.getRootMenu()
