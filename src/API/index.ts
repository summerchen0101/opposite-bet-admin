import login from './login'
import logout from './logout'
import checkLogin from './checkLogin'
import * as permission from './permission'

import * as adminRole from '@/pages/admin/AdminRole/API'
import * as adminAccount from '@/pages/admin/AdminAccount/API'

const API = {
  login,
  logout,
  checkLogin,
  adminRole,
  adminAccount,
  permission,
}

export default API
