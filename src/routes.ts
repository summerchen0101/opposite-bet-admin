import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Manager from '@/pages/account/Manager';
import Online from '@/pages/account/Online';
import { MenuGenerator } from '@/utils/menuGenerator';
import { PageGenerator } from '@/utils/pageGenerator';
import { RouteGenerator } from '@/utils/routeGenerator';

// PAGES
export const home = new PageGenerator('首頁', '/', Home, { exact: true });
const login = new PageGenerator('登入頁', '/login', Login);
export const manager = new PageGenerator(
  '管理員管理',
  '/account/manager',
  Manager,
);
export const online = new PageGenerator('在線人員', '/account/online', Online);

// ROUTERS
const routeGenerator = new RouteGenerator();
routeGenerator.add(login);
routeGenerator.add(home);
routeGenerator.add(manager);
routeGenerator.add(online);

// MENU
const menuGenerator = new MenuGenerator();
menuGenerator.createCategory('帳號管理', '/account');
menuGenerator.add('/account', manager);
menuGenerator.add('/account', online);

export const rootRoutes = routeGenerator.getRootRoutes();
export const menu = menuGenerator.getRootMenu();
