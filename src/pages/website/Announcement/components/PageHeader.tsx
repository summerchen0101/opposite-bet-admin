import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { Announcement } from '@/pages/website/routes'
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
      path: Announcement.path,
      breadcrumbName: Announcement.name,
    },
  ]
  return (
    <PageHeader
      title={Announcement.name}
      extra={<CreateButton />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
