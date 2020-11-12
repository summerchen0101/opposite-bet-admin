import React from 'react'
import PageHeader from '@/components/PageHeader'
import CreateButton from '../containers/CreateButton'
import { BankAccountSetting as page } from '@/pages/payment/routes'
import { useBreadcrumb } from '@/utils/hooks'
import { Space, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { toggleBankListModal } from '../reducer'

const Component: React.FC = () => {
  const routes = useBreadcrumb(page)
  const dispatch = useDispatch()
  const handleBankList = () => dispatch(toggleBankListModal(true))
  return (
    <PageHeader
      title={page.name}
      extra={
        <Space>
          <Button onClick={handleBankList}>銀行列表</Button>
          <CreateButton />
        </Space>
      }
      breadcrumb={{ routes }}
    />
  )
}

export default Component
