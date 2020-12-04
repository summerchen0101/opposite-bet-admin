import * as routes from '@/lib/routes'
import * as pages from '@/pages/promote'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { TagsOutlined } from '@ant-design/icons'
// PAGES
export const PromoteLink = new PageG(
  '推廣網址',
  routes.PromoteLink,
  pages.PromoteLink,
)
export const PromoteAcitivity = new PageG(
  '活動列表',
  routes.PromoteAcitivity,
  pages.PromoteAcitivity,
)
export const CreatePromoteAcitivity = new PageG(
  '新增活動',
  routes.CreatePromoteAcitivity,
  pages.CreatePromoteAcitivity,
)
export const PromoteReview = new PageG(
  '活動審核',
  routes.PromoteReview,
  pages.PromoteReview,
)

// ROUTERS
RouteG.create([
  PromoteLink,
  CreatePromoteAcitivity,
  PromoteAcitivity,
  PromoteReview,
])

// MENU
MenuG.createCategory('活動管理', routes.Promote, TagsOutlined, [
  PromoteLink,
  PromoteAcitivity,
  PromoteReview,
])
