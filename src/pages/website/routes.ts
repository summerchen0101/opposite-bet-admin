import * as routes from '@/lib/routes'
import * as pages from '@/pages/website'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { HomeOutlined } from '@ant-design/icons'

// PAGES
export const LandingPage = new PageG(
  '啟動頁設置',
  routes.LandingPage,
  pages.LandingPage,
)
export const Carousel = new PageG('首頁輪播圖', routes.Carousel, pages.Carousel)
export const PageManage = new PageG(
  '頁面管理',
  routes.PageManage,
  pages.PageManage,
)
export const Announcement = new PageG(
  '公告管理',
  routes.Announcement,
  pages.Announcement,
)
export const Faq = new PageG('常見問題', routes.Faq, pages.Faq)

// ROUTERS
RouteG.create([LandingPage, Carousel, PageManage, Announcement, Faq])

// MENU
MenuG.createCategory('網站管理', routes.Website, HomeOutlined, [
  LandingPage,
  Carousel,
  PageManage,
  Announcement,
  Faq,
])
