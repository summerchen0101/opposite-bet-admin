import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Manager from '@/pages/account/Manager';
import Online from '@/pages/account/Online';
import * as mPath from '@/lib/menuPath';

const rootRoutes = [
  { path: '/login', component: Login },
  { path: '/', component: Home, exact: true },

  { path: mPath.ACCOUNT_MANAGER, component: Manager },
  { path: mPath.ACCOUNT_ONLINE, component: Online },
];
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {rootRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
