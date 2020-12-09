import * as pages from '@/pages/organization'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ApartmentOutlined } from '@ant-design/icons'

const rootName = '組織管理'
const rootPath = '/org'

// PAGES
export const LevelManage = new PageG(
  '組織列表',
  `${rootPath}/level-manage`,
  pages.LevelManage,
)
export const MemberActivity = new PageG(
  '會員活躍情況',
  `${rootPath}/member-activity`,
  pages.MemberActivity,
)

// ROUTERS
RouteG.create([MemberActivity, LevelManage])

// MENU
MenuG.createCategory(rootName, rootPath, ApartmentOutlined, [
  MemberActivity,
  LevelManage,
])
