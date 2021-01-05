import * as pages from '@/pages/organization'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ApartmentOutlined } from '@ant-design/icons'

const rootName = '組織管理'
const rootPath = '/org'

// PAGES
export const MemberActivity = new PageG(
  '會員活躍情況',
  `${rootPath}/member-activity`,
  pages.MemberActivity,
)
export const MemberTag = new PageG(
  '會員標籤管理',
  `${rootPath}/member-tag`,
  pages.MemberTag,
)
export const MerchantManage = new PageG(
  '廠商管理',
  `${rootPath}/merchant`,
  pages.MerchantManage,
)
export const AgentManage = new PageG(
  '組織列表',
  `${rootPath}/agent`,
  pages.AgentManage,
)
export const MemberManage = new PageG(
  '會員列表',
  `${rootPath}/member`,
  pages.MemberManage,
)

// ROUTERS
RouteG.create([
  MemberActivity,
  MemberTag,
  MerchantManage,
  AgentManage,
  MemberManage,
])

// MENU
MenuG.createCategory(rootName, rootPath, ApartmentOutlined, [
  MemberActivity,
  MemberTag,
  MerchantManage,
  AgentManage,
  MemberManage,
])
