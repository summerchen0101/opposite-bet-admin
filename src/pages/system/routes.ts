import * as pages from '@/pages/system'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { HomeOutlined } from '@ant-design/icons'

const rootName = '系統管理'
const rootPath = '/system'

export const BlackIp = new PageG(
  'IP黑白名單',
  `${rootPath}/black-ip`,
  pages.BlackIp,
)
export const BlackArea = new PageG(
  '國家黑名單',
  `${rootPath}/black-area`,
  pages.BlackArea,
)

// ROUTERS
RouteG.create([BlackIp, BlackArea])

// MENU
MenuG.createCategory(rootName, rootPath, HomeOutlined, [BlackIp, BlackArea])
