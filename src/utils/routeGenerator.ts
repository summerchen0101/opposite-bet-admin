import { RouteProps } from 'react-router-dom'
import { PageGenerator } from './pageGenerator'

export class RouteGenerator {
  private routes: RouteProps[] = []
  constructor(initPages: PageGenerator[] = []) {
    initPages.forEach((page) => {
      this.add(page)
    })
  }
  add(pageRoute: PageGenerator): void {
    this.routes.push({
      path: pageRoute.path,
      component: pageRoute.component,
      exact: pageRoute.option?.exact,
    })
  }
  getRootRoutes(): RouteProps[] {
    return this.routes
  }
}
