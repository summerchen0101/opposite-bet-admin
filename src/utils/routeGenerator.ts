import { RouteProps } from 'react-router-dom'
import { PageGenerator } from './pageGenerator'

export class RouteGenerator {
  private routes: RouteProps[] = []
  static instance: RouteGenerator = null
  private constructor() {}
  static create(pages: PageGenerator[]): void {
    if (!this.instance) {
      this.instance = new RouteGenerator()
    }
    this.instance.batchAdd(pages)
  }
  batchAdd(pageRoutes: PageGenerator[]): void {
    pageRoutes.forEach((page) => this.add(page))
  }
  add(pageRoute: PageGenerator): void {
    this.routes.push({
      path: pageRoute.path,
      component: pageRoute.component,
      exact: pageRoute.option?.exact,
    })
  }
  static getRootRoutes(): RouteProps[] {
    return RouteGenerator.instance.routes
  }
}
