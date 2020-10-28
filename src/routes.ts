import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Manager from '@/pages/account/Manager';
import Online from '@/pages/account/Online';
import { MenuGenerator } from '@/utils/menuGenerator';
import { PageGenerator } from '@/utils/pageGenerator';
import { RouteGenerator } from '@/utils/routeGenerator';

const home = new PageGenerator('首頁', '/', Home, { exact: true });
const login = new PageGenerator('登入頁', '/login', Login);
const manager = new PageGenerator('管理員管理', '/account/manager', Manager);
const online = new PageGenerator('在線人員', '/account/online', Online);

const routeGenerator = new RouteGenerator();
routeGenerator.add(login);
routeGenerator.add(home);
routeGenerator.add(manager);
routeGenerator.add(online);

const menuGenerator = new MenuGenerator();
menuGenerator.createCategory('帳號管理', '/account');
menuGenerator.add('/account', manager);
menuGenerator.add('/account', online);

export const rootRoutes = routeGenerator.getRoutes();
export const menu = menuGenerator.getRoot();
