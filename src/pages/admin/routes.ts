import * as pages from '@/pages/admin'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

const rootName = '管理者管理'
const rootPath = '/admin'

// PAGES
export const AdminAccount = new PageG(
  '管理者列表',
  `${rootPath}/list`,
  pages.AdminAccount,
)
export const AdminRole = new PageG(
  '管理者角色管理',
  `${rootPath}/role`,
  pages.AdminRole,
)
export const AdminHistory = new PageG(
  '管理者歷程',
  `${rootPath}/history`,
  pages.AdminHistory,
)

// ROUTERS
RouteG.create([AdminAccount, AdminRole, AdminHistory])

// MENU
MenuG.createCategory(rootName, rootPath, null, [
  AdminAccount,
  AdminRole,
  AdminHistory,
])
