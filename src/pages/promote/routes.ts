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

// ROUTERS
RouteG.create([PromoteLink, PromoteAcitivity])

// MENU
MenuG.createCategory('活動管理', routes.Promote, TagsOutlined, [
  PromoteLink,
  PromoteAcitivity,
])
