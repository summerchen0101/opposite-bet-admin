import { rootRoutes } from '@/routes'
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes'
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const RouterProvider: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        {rootRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default RouterProvider
