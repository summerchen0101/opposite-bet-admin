import * as routes from '@/lib/routes'
import * as member from '@/pages/member'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { TeamOutlined } from '@ant-design/icons'

// PAGES
export const MemberActivity = new PageG(
  '會員活躍情況',
  routes.MemberActivity,
  member.MemberActivity,
)
export const MemberManage = new PageG(
  '會員列表',
  routes.MemberManage,
  member.MemberManage,
)
export const MemberLabel = new PageG(
  '標籤管理',
  routes.MemberLabel,
  member.MemberLabel,
)

// ROUTERS
RouteG.create([MemberActivity, MemberManage, MemberLabel])

// MENU
MenuG.createCategory('會員管理', routes.Member, TeamOutlined, [
  MemberActivity,
  MemberManage,
  MemberLabel,
])
