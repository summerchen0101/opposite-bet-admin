import Home from '@/pages/Home';
import Login from '@/pages/Login';
import EventManager from '@/pages/gameEvent/EventManager';
import { MenuGenerator } from '@/utils/menuGenerator';
import { PageGenerator } from '@/utils/pageGenerator';
import { RouteGenerator } from '@/utils/routeGenerator';

// PAGES
export const home = new PageGenerator('首頁', '/', Home, { exact: true });
const login = new PageGenerator('登入頁', '/login', Login);
export const eventManager = new PageGenerator(
  '賽事列表',
  '/game-event/event-manager',
  EventManager,
);

// ROUTERS
const routeGenerator = new RouteGenerator();
routeGenerator.add(login);
routeGenerator.add(home);
routeGenerator.add(eventManager);

// MENU
const menuGenerator = new MenuGenerator();
menuGenerator.createCategory('賽事管理', '/game-event');
menuGenerator.add('/game-event', eventManager);

export const rootRoutes = routeGenerator.getRootRoutes();
export const menu = menuGenerator.getRootMenu();
