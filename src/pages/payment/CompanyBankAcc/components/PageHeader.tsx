import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { MemberBankAcc as page } from '../../routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Button, Space } from 'antd'
import { usePopupProvider } from '../context/PopupProvider'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const [, setVisible] = usePopupProvider('createForm')
  const [, setGroupVisible] = usePopupProvider('groupList')
  return (
    <PageHeader
      title={page.name}
      breadcrumb={{ routes }}
      extra={
        <Space>
          <Button type="primary" onClick={() => setGroupVisible(true)}>
            管理輪替群組
          </Button>
          <Button type="primary" onClick={() => setVisible(true)}>
            新增帳戶
          </Button>
        </Space>
      }
    />
  )
}

export default Component
