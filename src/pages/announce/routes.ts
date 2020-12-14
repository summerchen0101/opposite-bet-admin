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

export const InMail = new PageG('站內信', `${rootPath}/message`, pages.InMail)

// ROUTERS
RouteG.create([AnnounceManage, InMail])

// MENU
MenuG.createCategory(rootName, rootPath, ControlOutlined, [
  AnnounceManage,
  InMail,
])
