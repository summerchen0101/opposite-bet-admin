import * as member from '@/pages/member'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { TeamOutlined } from '@ant-design/icons'

const rootName = '會員管理'
const rootPath = '/member'

// PAGES
export const MemberActivity = new PageG(
  '會員活躍情況',
  `${rootPath}/activity`,
  member.MemberActivity,
)
export const MemberManage = new PageG(
  '會員列表',
  `${rootPath}/list`,
  member.MemberManage,
)
export const MemberDetail = new PageG(
  '會員資訊',
  `${rootPath}/detail`,
  member.MemberDetail,
)
export const MemberLabel = new PageG(
  '標籤管理',
  `${rootPath}/label`,
  member.MemberLabel,
)

// ROUTERS
RouteG.create([MemberActivity, MemberDetail, MemberManage, MemberLabel])

// MENU
MenuG.createCategory(rootName, rootPath, TeamOutlined, [
  MemberActivity,
  MemberManage,
  MemberLabel,
])
