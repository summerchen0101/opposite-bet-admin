import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { LandingPage } from '@/pages/website/routes'
const Component: React.FC = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: '首頁',
    },
    {
      path: '',
      breadcrumbName: '網站管理',
    },
    {
      path: LandingPage.path,
      breadcrumbName: LandingPage.name,
    },
  ]
  return (
    <PageHeader
      title={LandingPage.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
