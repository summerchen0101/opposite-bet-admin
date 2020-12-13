import { LevelCode } from '@/lib/enums'
import * as pages from '@/pages/report'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { LineChartOutlined } from '@ant-design/icons'

const rootName = '報表'
const rootPath = '/report'

// PAGES
export const GameReport = new PageG(
  '遊戲報表',
  `${rootPath}/game`,
  pages.GameReport,
)
export const DailyReport = new PageG(
  '日結算',
  `${rootPath}/daily`,
  pages.DailyReport,
)
export const MonthlyReport = new PageG(
  '月結算',
  `${rootPath}/monthly`,
  pages.MonthlyReport,
)

// ROUTERS
RouteG.create([GameReport, DailyReport, MonthlyReport])

// MENU
MenuG.createCategory(rootName, rootPath, LineChartOutlined, [
  GameReport,
  DailyReport,
  MonthlyReport,
])
