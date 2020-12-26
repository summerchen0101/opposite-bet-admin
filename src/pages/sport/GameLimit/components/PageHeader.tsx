import PageHeader from '@/components/PageHeader'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import React from 'react'
import { GameLimit as page } from '../../routes'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <Button>取消</Button>
          <Button type="primary">送出</Button>
        </Space>
      }
    />
  )
}

export default Component
