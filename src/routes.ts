import HomePage from '@/pages/Home'
import VersionPage from '@/pages/Version'
import LoginPage from '@/pages/Login'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'
import '@/pages/announce/routes'
import '@/pages/organization/routes'
import '@/pages/report/routes'
import '@/pages/promote/routes'
import '@/pages/payment/routes'
import '@/pages/admin/routes'
import '@/pages/website/routes'
import '@/pages/system/routes'

// PAGES
export const Home = new PageG('首頁', '/', HomePage, { exact: true })
export const Version = new PageG('版本資訊', '/version', VersionPage)
const Login = new PageG('登入頁', '/login', LoginPage)

// ROUTERS
RouteG.create([Login, Home, Version])

export const rootRoutes = RouteG.getRootRoutes()
export const menu = MenuG.getRootMenu()
