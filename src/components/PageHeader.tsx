import { PageHeader } from 'antd'
import { BreadcrumbProps } from 'antd/lib/breadcrumb'
import { PageHeaderProps } from 'antd/lib/page-header'
import React from 'react'
import { Link } from 'react-router-dom'

function itemRender(route) {
  if (!route.path) return <span>{route.breadcrumbName}</span>

  return <Link to={route.path}>{route.breadcrumbName}</Link>
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
