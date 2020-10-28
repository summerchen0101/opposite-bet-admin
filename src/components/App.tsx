import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes';
import GlobalStyle from '@/utils/global-style';
import { rootRoutes } from '@/routes';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {rootRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
