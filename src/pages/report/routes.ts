import * as routes from '@/lib/routes'
import * as pages from '@/pages/report'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { LineChartOutlined } from '@ant-design/icons'

// PAGES
export const GameReport = new PageG(
  '遊戲報表',
  routes.GameReport,
  pages.GameReport,
)
export const DailyReport = new PageG(
  '日結算',
  routes.DailyReport,
  pages.DailyReport,
)
export const MonthlyReport = new PageG(
  '月結算',
  routes.MonthlyReport,
  pages.MonthlyReport,
)

// ROUTERS
RouteG.create([GameReport, DailyReport, MonthlyReport])

// MENU
MenuG.createCategory('報表', routes.Report, LineChartOutlined, [
  GameReport,
  DailyReport,
  MonthlyReport,
])
