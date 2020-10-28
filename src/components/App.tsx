import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes';
import GlobalStyle from '@/utils/global-style';
import { rootRoutes } from '@/routes';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MS反波膽</title>
      </Helmet>
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
