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
export const ReportSearch = new PageG(
  '報表查詢',
  `${rootPath}/search`,
  pages.ReportSearch,
)
export const MemberBets = new PageG(
  '會員下注列表',
  `${rootPath}/member-bets`,
  pages.MemberBets,
)

export const BettingSearch = new PageG(
  '注單查詢',
  `${rootPath}/betting-search`,
  pages.BettingSearch,
)

// ROUTERS
RouteG.create([GameReport, ReportSearch, MemberBets, BettingSearch])

// MENU
MenuG.createCategory(rootName, rootPath, LineChartOutlined, [
  GameReport,
  ReportSearch,
  BettingSearch,
])
