import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

export default function MenuWithSubMenu(menu) {
  if (menu.children) {
    return (
      <SubMenu key={menu.path} icon={<menu.iconComp />} title={menu.label}>
        {menu.children.map((m) => MenuWithSubMenu(m))}
      </SubMenu>
    );
  } else {
    return (
      <Menu.Item key={menu.path} icon={menu.iconComp && <menu.iconComp />}>
        <Link to={menu.path}>{menu.label}</Link>
      </Menu.Item>
    );
  }
}

// export default function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       exact={route.exact}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }
