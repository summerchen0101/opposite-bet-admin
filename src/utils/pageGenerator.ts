import { RouteProps } from 'react-router-dom'
import { TabType } from '@/store/reducer'

export class PageGenerator {
  constructor(
    public name: string,
    public path: string,
    public component: React.ComponentType,
    public option?: Partial<RouteProps>,
  ) {}
  getTab(): TabType {
    return { label: this.name, path: this.path }
  }
}
