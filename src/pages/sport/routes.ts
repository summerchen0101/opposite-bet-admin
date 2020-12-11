import * as pages from '@/pages/sport'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

const rootName = '體育設定'
const rootPath = '/sport'

// PAGES
export const GameSetting = new PageG(
  '賽事設定',
  `${rootPath}/manage`,
  pages.GameSetting,
)

// ROUTERS
RouteG.create([GameSetting])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [GameSetting])
