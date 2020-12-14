import { useTypedSelector } from '@/store/selectors'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWithSubRoutes(route) {
  const isLogin = useTypedSelector((state) => state.global.isLogin)
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        if (route.path !== '/login' && !isLogin) {
          return <Redirect to="/login" />
        } else if (route.path === '/login' && isLogin) {
          return <Redirect to="/" />
        }
        if (route.redirect) {
          return <Redirect to={route.redirect} />
        }
        return <route.component {...props} routes={route.routes} />
      }}
    />
  )
}
