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
  `${rootPath}/manage`,
  pages.AnnounceManage,
)

export const Marquee = new PageG(
  '跑馬燈管理',
  `${rootPath}/marquee`,
  pages.Marquee,
)

// ROUTERS
RouteG.create([AnnounceManage, Marquee])

// MENU
MenuG.createCategory(rootName, rootPath, ControlOutlined, [
  AnnounceManage,
  Marquee,
])
