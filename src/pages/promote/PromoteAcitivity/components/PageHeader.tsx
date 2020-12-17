import PageHeader from '@/components/PageHeader'
import { PromoteAcitivity as page } from '@/pages/promote/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Space } from 'antd'
import React from 'react'
import CreateButton from '../containers/CreateButton'
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
