import React from 'react'

import { PageHeader } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import { BreadcrumbProps } from 'antd/lib/breadcrumb'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { PageHeaderProps } from 'antd/lib/page-header'

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}

const Component: React.FC<
  PageHeaderProps & { title: string; breadcrumb: BreadcrumbProps }
> = ({ title, breadcrumb, ...props }) => {
  return (
    <PageHeader
      style={{ padding: 0, paddingBottom: 20 }}
      title={title}
      breadcrumb={{ itemRender, ...breadcrumb }}
      {...props}
    />
  )
}

export default Component
