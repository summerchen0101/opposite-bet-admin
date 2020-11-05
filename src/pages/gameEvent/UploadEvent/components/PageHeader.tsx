import React from 'react'
import PageHeader from '@/components/PageHeader'
import { UploadEvent as page } from '@/pages/gameEvent/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button } from 'antd'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={<Button type="primary">採集明天賽事</Button>}
    />
  )
}

export default Component
