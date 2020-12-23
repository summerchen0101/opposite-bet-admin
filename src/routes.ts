import '@/pages/global/routes'
import '@/pages/announce/routes'
import '@/pages/sport/routes'
import '@/pages/game/routes'
import '@/pages/organization/routes'
import '@/pages/payment/routes'
import '@/pages/report/routes'
import '@/pages/promote/routes'
import '@/pages/admin/routes'
import '@/pages/website/routes'
import { MenuGenerator as MenuG } from '@/utils/menuGenerator'
import { RouteGenerator as RouteG } from '@/utils/routeGenerator'

export const rootRoutes = RouteG.getRootRoutes()
export const menu = MenuG.getRootMenu()
