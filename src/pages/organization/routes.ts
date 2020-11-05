import * as routes from '@/lib/routes'
import * as pages from '@/pages/organization'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ApartmentOutlined } from '@ant-design/icons'

// PAGES
export const OrganizationManage = new PageG(
  '組織列表',
  routes.OrganizationManage,
  pages.OrganizationManage,
)
export const InvitationCode = new PageG(
  '組織邀請',
  routes.InvitationCode,
  pages.InvitationCode,
)

// ROUTERS
RouteG.create([OrganizationManage, InvitationCode])

// MENU
MenuG.createCategory('組織管理', routes.Organization, ApartmentOutlined, [
  OrganizationManage,
  InvitationCode,
])
