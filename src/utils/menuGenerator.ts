import { UserOutlined } from '@ant-design/icons';
import { PageGenerator } from './pageGenerator';

export interface IMenuChild {
  path: string;
  label: string;
}

interface IMenuItem {
  path: string;
  label: string;
  iconComp: React.ElementType;
  children: IMenuChild[];
}
interface IMenu {
  [categoryName: string]: IMenuItem;
}

export class MenuGenerator {
  private menu: IMenu = {};
  private defaultIcon = UserOutlined;
  createCategory(name: string, path: string, icon?: React.ElementType): void {
    this.menu[path] = {
      path: path,
      label: name,
      iconComp: icon || this.defaultIcon,
      children: [],
    };
  }
  add(categoryPath: string, pageRoute: PageGenerator): void {
    if (!this.menu[categoryPath]) {
      throw Error('Please create menu category before add child Items!');
    }
    this.menu[categoryPath].children.push({
      path: pageRoute.path,
      label: pageRoute.name,
    });
  }
  getRoot(): IMenuItem[] {
    return Object.keys(this.menu).map(
      (categoryPath) => this.menu[categoryPath],
    );
  }
}
