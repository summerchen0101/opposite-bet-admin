import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { PromoteAcitivity as page } from '@/pages/promote/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Space, Button } from 'antd'
const ExtraButtons = (
  <Space>
    <CreateButton />
  </Space>
)
const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={ExtraButtons}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
