import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import RouteWithSubRoutes from '@/utils/RouteWithSubRoutes'
import GlobalStyle from '@/utils/global-style'
import { rootRoutes } from '@/routes'
import { Helmet } from 'react-helmet'
import * as apis from '@/utils/apis'
import { message } from 'antd'

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
