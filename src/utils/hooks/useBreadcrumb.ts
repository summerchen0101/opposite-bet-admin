import React, { useEffect, useState } from 'react'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { PageGenerator } from '../pageGenerator'

const useBreadcrumb = (
  page: PageGenerator,
  subPages: PageGenerator[] = [],
): Route[] => {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    setRoutes([
      {
        path: '/',
        breadcrumbName: '首頁',
      },
      ...page.parents.map((parent) => ({
        path: '',
        breadcrumbName: parent.name,
      })),
      {
        path: page.path,
        breadcrumbName: page.name,
      },
      ...subPages.map((page) => ({
        path: page.path,
        breadcrumbName: page.name,
      })),
    ])
  }, [])
  return routes
}

export default useBreadcrumb
