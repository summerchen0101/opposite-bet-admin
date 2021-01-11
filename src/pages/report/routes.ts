import * as pages from '@/pages/report'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { LineChartOutlined } from '@ant-design/icons'

const rootName = '報表'
const rootPath = '/report'

// PAGES
export const BettingResult = new PageG(
  '注單報表',
  `${rootPath}/betting-result`,
  pages.BettingResult,
)
export const GameReport = new PageG(
  '遊戲報表',
  `${rootPath}/game`,
  pages.GameReport,
)
export const ReportSearch = new PageG(
  '報表查詢',
  `${rootPath}/search`,
  pages.ReportSearch,
)
// ROUTERS
RouteG.create([BettingResult, GameReport, ReportSearch])

// MENU
MenuG.createCategory(rootName, rootPath, LineChartOutlined, [
  GameReport,
  BettingResult,
  ReportSearch,
])
