import { useTypedSelector } from '@/store/rootReducer';
import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWithSubRoutes(route) {
  const isLogin = useTypedSelector((state) => state.global.isLogin);
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
