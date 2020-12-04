import * as pages from '@/pages/system'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ControlOutlined } from '@ant-design/icons'

const rootName = '系統管理'
const rootPath = '/system'

// PAGES
export const IpSetting = new PageG(
  'IP黑白名單',
  `${rootPath}/ip-auth`,
  pages.IpSetting,
)
export const LoginHistory = new PageG(
  'IP登入歷程',
  `${rootPath}/ip-history`,
  pages.LoginHistory,
)

// ROUTERS
RouteG.create([IpSetting, LoginHistory])

// MENU
MenuG.createCategory(rootName, rootPath, ControlOutlined, [
  IpSetting,
  LoginHistory,
])
