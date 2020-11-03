import Home from '@/pages/Home';
import Login from '@/pages/Login';
import EventManager from '@/pages/gameEvent/EventManager';
import EventScore from '@/pages/gameEvent/EventScore';
import UploadEvent from '@/pages/gameEvent/UploadEvent';
import { MenuGenerator } from '@/utils/menuGenerator';
import { PageGenerator } from '@/utils/pageGenerator';
import { RouteGenerator } from '@/utils/routeGenerator';
import * as routes from '@/lib/routes';

// PAGES
export const home = new PageGenerator('首頁', '/', Home, { exact: true });
const login = new PageGenerator('登入頁', '/login', Login);
export const eventManager = new PageGenerator(
  '賽事列表',
  routes.eventManager,
  EventManager,
  { exact: true },
);
export const eventScore = new PageGenerator(
  '比分',
  routes.eventScore,
  EventScore,
);
export const uploadEvent = new PageGenerator(
  '上架賽事',
  routes.uploadEvent,
  UploadEvent,
);

// ROUTERS
const routeGenerator = new RouteGenerator();
routeGenerator.add(login);
routeGenerator.add(home);
routeGenerator.add(eventManager);
routeGenerator.add(eventScore);
routeGenerator.add(uploadEvent);

// MENU
const menuGenerator = new MenuGenerator();
menuGenerator.createCategory('賽事管理', routes.event);
menuGenerator.add(routes.event, eventManager);
menuGenerator.add(routes.event, uploadEvent);

export const rootRoutes = routeGenerator.getRootRoutes();
export const menu = menuGenerator.getRootMenu();
