import { Breadcrumb } from 'antd'
import { BreadcrumbProps } from 'antd/lib/breadcrumb'
import { PageHeaderProps } from 'antd/lib/page-header'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function itemRender(route) {
  if (!route.path) return <span>{route.breadcrumbName}</span>

  return <Link to={route.path}>{route.breadcrumbName}</Link>
}

const Wrapper = styled.div`
  margin-bottom: 15px;
`

const PageHeader: React.FC<
  PageHeaderProps & { title: string; breadcrumb: BreadcrumbProps }
> = ({ title, breadcrumb, ...props }) => {
  return (
    <Wrapper>
      <Breadcrumb itemRender={itemRender} {...breadcrumb} />
    </Wrapper>
  )
}

export default PageHeader
