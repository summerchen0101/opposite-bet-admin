import login from './login'
import logout from './logout'
import checkLogin from './checkLogin'
import * as permission from './permission'

import * as adminRole from '@/pages/admin/AdminRole/API'
import * as adminAccount from '@/pages/admin/AdminAccount/API'
import * as menuManage from '@/pages/admin/MenuManage/API'
import * as announceManage from '@/pages/announce/AnnounceManage/API'
import * as Marquee from '@/pages/announce/Marquee/API'
import * as Message from '@/pages/announce/Message/API'
import * as Activity from '@/pages/promote/PromoteAcitivity/API'
import * as Country from '@/pages/sport/Country/API'
import * as Sport from '@/pages/sport/Sport/API'

const API = {
  login,
  logout,
  checkLogin,
  permission,
  adminRole,
  adminAccount,
  announceManage,
  menuManage,
  Marquee,
  Activity,
  Message,
  Country,
  Sport,
}

export default API
