import login from './login'
import logout from './logout'
import checkLogin from './checkLogin'
import * as adminRole from '@/pages/admin/AdminRole/API'
import * as permission from './permission'

const API = {
  login,
  logout,
  checkLogin,
  adminRole,
  permission,
}

export default API
