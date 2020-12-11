import * as pages from '@/pages/global'
import { PageGenerator as PageG } from '@/utils/pageGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

// PAGES
export const Home = new PageG('首頁', '/', pages.Home, { exact: true })
const Login = new PageG('登入頁', '/login', pages.Login)

// ROUTERS
RouteG.create([Login, Home])
