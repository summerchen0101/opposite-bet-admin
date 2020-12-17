import PageHeader from '@/components/PageHeader'
import { PromoteAcitivity as page } from '@/pages/promote/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const history = useHistory()
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <Button onClick={() => history.goBack()}>回上頁</Button>
          <Button type="primary">儲存</Button>
        </Space>
      }
    />
  )
}

export default Component
