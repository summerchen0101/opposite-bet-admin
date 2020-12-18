import login from './login'
import logout from './logout'
import checkLogin from './checkLogin'
import * as permission from './permission'

import * as adminRole from '@/pages/admin/AdminRole/API'
import * as adminAccount from '@/pages/admin/AdminAccount/API'
import * as menuManage from '@/pages/admin/MenuManage/API'
import * as announceManage from '@/pages/announce/AnnounceManage/API'

const API = {
  login,
  logout,
  checkLogin,
  permission,
  adminRole,
  adminAccount,
  announceManage,
  menuManage,
}

export default API
