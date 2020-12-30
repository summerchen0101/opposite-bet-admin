import * as pages from '@/pages/organization'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { ApartmentOutlined } from '@ant-design/icons'
import LevelTable from './LevelManage/containers/TableData'
import AliasTable from './LevelManage/containers/AliasTableData'

const rootName = '組織管理'
const rootPath = '/org'

// PAGES
export const LevelManage = new PageG(
  '組織列表',
  `${rootPath}/level-manage`,
  pages.LevelManage,
)
export const LevelManageLevelTable = new PageG(
  '組織列表-階層',
  `${LevelManage.path}/:level?`,
  LevelTable,
)
export const LevelManageAliasTable = new PageG(
  '組織列表-子帳號',
  `${LevelManage.path}/alias/:level`,
  AliasTable,
)
export const MemberActivity = new PageG(
  '會員活躍情況',
  `${rootPath}/member-activity`,
  pages.MemberActivity,
)
export const MemberLabel = new PageG(
  '標籤管理',
  `${rootPath}/member-label`,
  pages.MemberLabel,
  {
    exact: true,
  },
)
export const MemberTag = new PageG(
  '會員標籤管理',
  `${rootPath}/member-tag`,
  pages.MemberTag,
)
export const MemberLabelDetail = new PageG(
  '會員數',
  `${rootPath}/member-label/detail`,
  pages.MemberLabelDetail,
)

// ROUTERS
RouteG.create([
  MemberActivity,
  LevelManage,
  MemberLabel,
  MemberLabelDetail,
  MemberTag,
])

// MENU
MenuG.createCategory(rootName, rootPath, ApartmentOutlined, [
  MemberActivity,
  LevelManage,
  MemberLabel,
  MemberTag,
])
