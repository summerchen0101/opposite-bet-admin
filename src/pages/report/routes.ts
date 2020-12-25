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
// ROUTERS
RouteG.create([BettingResult])

// MENU
MenuG.createCategory(rootName, rootPath, LineChartOutlined, [BettingResult])
