import * as pages from '../announce'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ControlOutlined } from '@ant-design/icons'

const rootName = '公告管理'
const rootPath = '/announce'

// PAGES
export const AnnounceManage = new PageG(
  '公告列表',
  `${rootPath}/account`,
  pages.AnnounceManage,
)

// ROUTERS
RouteG.create([AnnounceManage])

// MENU
MenuG.createCategory(rootName, rootPath, ControlOutlined, [AnnounceManage])
