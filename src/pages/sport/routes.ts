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
export const Game = new PageG('球種設定', `${rootPath}/game`, pages.Game)
export const League = new PageG('聯盟設定', `${rootPath}/league`, pages.League)
export const Team = new PageG('隊伍設定', `${rootPath}/team`, pages.Team)
export const Section = new PageG(
  '場次設定',
  `${rootPath}/section`,
  pages.Section,
)
export const Play = new PageG('玩法設定', `${rootPath}/play`, pages.Play)

export const GameLimit = new PageG(
  '玩法數值調整(deprecated)',
  `${rootPath}/game-limit`,
  pages.GameLimit,
)
export const PlaySetting = new PageG(
  '玩法數值調整',
  `${rootPath}/play-setting`,
  pages.PlaySetting,
)

// ROUTERS
RouteG.create([
  Country,
  Sport,
  Game,
  League,
  Team,
  Section,
  Play,
  GameLimit,
  PlaySetting,
])

// MENU
MenuG.createCategory(rootName, rootPath, DribbbleOutlined, [
  Country,
  Sport,
  Game,
  League,
  Team,
  Section,
  Play,
  PlaySetting,
])
