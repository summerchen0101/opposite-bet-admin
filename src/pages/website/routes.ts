import * as pages from '@/pages/website'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import { HomeOutlined } from '@ant-design/icons'

const rootName = '網站管理'
const rootPath = '/website'

// PAGES
export const LandingPage = new PageG(
  '啟動頁設置',
  `${rootPath}/landing-page`,
  pages.LandingPage,
)
export const Carousel = new PageG(
  '首頁輪播圖',
  `${rootPath}/carousel`,
  pages.Carousel,
)
export const PageManage = new PageG(
  '頁面管理',
  `${rootPath}/page-manage`,
  pages.PageManage,
)
export const MemberLabel = new PageG(
  '標籤管理',
  `${rootPath}/member-label`,
  pages.MemberLabel,
  {
    exact: true,
  },
)
export const MemberLabelDetail = new PageG(
  '會員數',
  `${rootPath}/member-label/detail`,
  pages.MemberLabelDetail,
)
export const Faq = new PageG('常見問題', `${rootPath}/faq`, pages.Faq)

// ROUTERS
RouteG.create([
  LandingPage,
  Carousel,
  PageManage,
  Faq,
  MemberLabel,
  MemberLabelDetail,
])

// MENU
MenuG.createCategory(rootName, rootPath, HomeOutlined, [
  LandingPage,
  Carousel,
  PageManage,
  Faq,
  MemberLabel,
])
