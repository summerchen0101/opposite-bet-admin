import { RouteProps } from 'react-router-dom'
import { TabType } from '@/store/reducer'
import { Category } from './menuGenerator'
export class PageGenerator {
  parents: Category[] = []
  constructor(
    public name: string,
    public path: string,
    public component: React.ComponentType,
    public option?: Partial<RouteProps>,
  ) {}
  getTab(): TabType {
    return { label: this.name, path: this.path }
  }
  addParent(parent: Category): void {
    this.parents.push(parent)
  }
}
