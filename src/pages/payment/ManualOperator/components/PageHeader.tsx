import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { ManualOperator as page } from '../../routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import { usePopupProvider } from '../context/PopupProvider'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [, setVisible] = usePopupProvider('createForm')
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <Button type="primary" onClick={() => setVisible(true)}>
            新增人工加減碼
          </Button>
        </Space>
      }
    />
  )
}

export default Component
