import * as pages from '@/pages/organization'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ApartmentOutlined } from '@ant-design/icons'

const rootName = '組織管理'
const rootPath = '/org'

// PAGES
export const OrganizationManage = new PageG(
  '組織列表',
  `${rootPath}/list`,
  pages.OrganizationManage,
)
export const InvitationCode = new PageG(
  '組織邀請',
  `${rootPath}/invitation`,
  pages.InvitationCode,
)

// ROUTERS
RouteG.create([OrganizationManage, InvitationCode])

// MENU
MenuG.createCategory(rootName, rootPath, ApartmentOutlined, [
  OrganizationManage,
  InvitationCode,
])
