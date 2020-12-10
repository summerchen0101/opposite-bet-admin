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

// ROUTERS
RouteG.create([GameManage])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [GameManage])
