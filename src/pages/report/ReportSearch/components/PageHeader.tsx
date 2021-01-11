import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { GameReport as page } from '../../routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import { usePopupProvider } from '../context/PopupProvider'
import { ReloadOutlined } from '@ant-design/icons'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [, setVisible] = usePopupProvider('createForm')
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <Button type="primary">
            刷新
            <ReloadOutlined className="ml-1" />
          </Button>
        </Space>
      }
    />
  )
}

export default Component
