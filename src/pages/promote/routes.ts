import * as pages from '@/pages/promote'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { TagsOutlined } from '@ant-design/icons'

const rootName = '活動管理'
const rootPath = '/promote'

// PAGES
export const PromoteAcitivity = new PageG(
  '活動列表',
  `${rootPath}/list`,
  pages.PromoteAcitivity,
)
export const CreatePromoteAcitivity = new PageG(
  '新增活動',
  `${rootPath}/add`,
  pages.CreatePromoteAcitivity,
)
export const PromoteReview = new PageG(
  '活動審核',
  `${rootPath}/review`,
  pages.PromoteReview,
)

// ROUTERS
RouteG.create([CreatePromoteAcitivity, PromoteAcitivity, PromoteReview])

// MENU
MenuG.createCategory(rootName, rootPath, TagsOutlined, [
  PromoteAcitivity,
  PromoteReview,
])
