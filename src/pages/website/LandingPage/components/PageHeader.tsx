import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { LandingPage as page } from '@/pages/website/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
const ExtraButtons = (
  <Space>
    <Button>秒數設定</Button>
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
