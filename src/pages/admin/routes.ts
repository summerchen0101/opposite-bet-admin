import * as routes from '@/lib/routes'
import * as pages from '@/pages/admin'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

// PAGES
export const AdminAccount = new PageG(
  '管理者列表',
  routes.AdminAccount,
  pages.AdminAccount,
)
export const AdminRole = new PageG(
  '管理者角色管理',
  routes.AdminRole,
  pages.AdminRole,
)
export const AdminHistory = new PageG(
  '管理者歷程',
  routes.AdminHistory,
  pages.AdminHistory,
)

// ROUTERS
RouteG.create([AdminAccount, AdminRole, AdminHistory])

// MENU
MenuG.createCategory('管理者管理', routes.Admin, null, [
  AdminAccount,
  AdminRole,
  AdminHistory,
])
