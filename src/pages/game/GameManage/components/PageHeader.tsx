import PageHeader from '@/components/PageHeader'
import { usePopupProvider } from '../context/PopupProvider'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import React from 'react'
import { GameManage as page } from '../../routes'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [visible, setVisible] = usePopupProvider('createForm')
  return (
    <PageHeader
      title={page.name}
      extra={
        <Space>
          <Button type="primary" onClick={() => setVisible(true)}>
            新增
          </Button>
          <Button type="primary">採集賽事</Button>
        </Space>
      }
      breadcrumb={{ routes }}
    />
  )
}

export default Component
