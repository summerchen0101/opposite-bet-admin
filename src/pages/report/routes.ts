import * as routes from '@/lib/routes'
import * as pages from '@/pages/report'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

// PAGES
export const DailyReport = new PageG(
  '組織列表',
  routes.DailyReport,
  pages.DailyReport,
)

// ROUTERS
RouteG.create([DailyReport])

// MENU
MenuG.createCategory('組織管理', routes.Report, null, [DailyReport])
