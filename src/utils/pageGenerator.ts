import { RouteProps } from 'react-router-dom';

export class PageGenerator {
  constructor(
    public name: string,
    public path: string,
    public component: React.ComponentType,
    public option?: Partial<RouteProps>,
  ) {}
}
