import * as pages from '@/pages/system'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { HomeOutlined } from '@ant-design/icons'

const rootName = '系統管理'
const rootPath = '/system'

export const BlackIp = new PageG(
  '黑名單管理',
  `${rootPath}/black-ip`,
  pages.BlackIp,
)

// ROUTERS
RouteG.create([BlackIp])

// MENU
MenuG.createCategory(rootName, rootPath, HomeOutlined, [BlackIp])
