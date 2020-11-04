import { StarOutlined } from '@ant-design/icons'
import { PageGenerator } from './pageGenerator'

export interface IMenuChild {
  path: string
  label: string
}

interface IMenuItem {
  path: string
  label: string
  iconComp: React.ElementType
  children: IMenuChild[]
}
interface IMenu {
  [categoryName: string]: IMenuItem
}

export class MenuGenerator {
  private menu: IMenu = {}
  private defaultIcon = StarOutlined
  static instance: MenuGenerator
  private constructor() {}
  static createCategory(
    name: string,
    path: string,
    icon?: React.ElementType,
    children?: PageGenerator[],
  ): void {
    if (!this.instance) {
      this.instance = new MenuGenerator()
    }
    this.instance.menu[path] = {
      path: path,
      label: name,
      iconComp: icon || this.instance.defaultIcon,
      children: [],
    }
    children.forEach((page) => {
      this.instance.add(path, page)
    })
  }
  private add(categoryPath: string, pageRoute: PageGenerator): void {
    if (!this.menu[categoryPath]) {
      throw Error('Please create menu category before add child Items!')
    }
    this.menu[categoryPath].children.push({
      path: pageRoute.path,
      label: pageRoute.name,
    })
  }
  static getRootMenu(): IMenuItem[] {
    return Object.keys(this.instance.menu).map(
      (categoryPath) => this.instance.menu[categoryPath],
    )
  }
}
