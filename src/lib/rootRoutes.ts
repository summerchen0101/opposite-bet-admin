import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Manager from '@/pages/account/Manager';
import Online from '@/pages/account/Online';
import * as mPath from '@/lib/menuPath';

const rootRoutes = [
  { path: '/login', component: Login },
  { path: '/', component: Home, exact: true },

  { path: mPath.ACCOUNT_MANAGER, component: Manager },
  { path: mPath.ACCOUNT_ONLINE, component: Online },
];

export default rootRoutes;
