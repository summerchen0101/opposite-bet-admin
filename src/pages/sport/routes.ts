import * as pages from '@/pages/sport'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { DribbbleOutlined } from '@ant-design/icons'

const rootName = '體育設定'
const rootPath = '/sport'

// PAGES
export const Country = new PageG(
  '地區設定',
  `${rootPath}/country`,
  pages.Country,
)
export const Sport = new PageG('體育設定', `${rootPath}/sport`, pages.Sport)
export const SportGame = new PageG(
  '球種設定',
  `${rootPath}/sport-game`,
  pages.SportGame,
)

export const GameLimit = new PageG(
  '玩法數值調整',
  `${rootPath}/game-limit`,
  pages.GameLimit,
)

// ROUTERS
RouteG.create([Country, Sport, SportGame, GameLimit])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [
  Country,
  Sport,
  SportGame,
  GameLimit,
])
