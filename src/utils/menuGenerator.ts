import { StarOutlined } from '@ant-design/icons'
import { PageGenerator } from './pageGenerator'

export interface MenuChild {
  path: string
  label: string
}

interface MenuItem {
  path: string
  label: string
  iconComp: React.ElementType
  children: MenuChild[]
}
interface Menu {
  [categoryName: string]: MenuItem
}
export interface Category {
  name: string
  path: string
}
export class MenuGenerator {
  private menu: Menu = {}
  private defaultIcon = StarOutlined
  static instance: MenuGenerator
  static categorys: Category[] = []
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
      page.addParent({ name, path })
      this.instance.addCatChild(path, page)
    })
    this.categorys.push({ name, path })
  }
  private addCatChild(categoryPath: string, pageRoute: PageGenerator): void {
    if (!this.menu[categoryPath]) {
      throw Error('Please create menu category before add child Items!')
    }
    this.menu[categoryPath].children.push({
      path: pageRoute.path,
      label: pageRoute.name,
    })
  }
  static getRootMenu(): MenuItem[] {
    return Object.keys(this.instance.menu).map(
      (categoryPath) => this.instance.menu[categoryPath],
    )
  }
}
