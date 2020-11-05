import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { ManualPayment as page } from '@/pages/payment/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { BatchCreateButton, DownloadButton } from '@/components'
import { Button, Space } from 'antd'

const ExtraButtons: React.FC = () => {
  return (
    <Space>
      <CreateButton />
      <BatchCreateButton />
      <DownloadButton />
    </Space>
  )
}

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      extra={<ExtraButtons />}
      breadcrumb={{ routes }}
    />
  )
}

export default Component
