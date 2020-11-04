import * as routes from '@/lib/routes'
import * as pages from '@/pages/system'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

// PAGES
export const IpSetting = new PageG(
  'IP黑白名單',
  routes.IpSetting,
  pages.IpSetting,
)
export const LoginHistory = new PageG(
  'IP登入歷程',
  routes.LoginHistory,
  pages.LoginHistory,
)

// ROUTERS
RouteG.create([IpSetting, LoginHistory])

// MENU
MenuG.createCategory('系統管理', routes.System, null, [IpSetting, LoginHistory])
