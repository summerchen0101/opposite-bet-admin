import { PopupTable } from '@/components'
import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleBankCreateModal, toggleBankListModal } from '../reducer'
import { selectDisplayBankListModal, useTypedSelector } from '../selectors'
const { Option } = Select
const BankListForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayBankListModal)
  const onCancel = () => {
    dispatch(toggleBankListModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleBankListModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const columns = [
    {
      title: '編號',
      render: (_, row) => '123',
    },
    {
      title: '銀行代碼',
      render: (_, row) => '822',
    },
    {
      title: '銀行名稱',
      render: (_, row) => '中國信託',
    },
    {
      title: '更新人員',
      render: (_, row) => 'frola',
    },
    {
      title: '更新時間',
      render: (_, row) => '2019-07-01 10:50:22',
    },
  ]
  const data = [...Array(10)].map((t, i) => ({ ...t, key: i }))
  const handleCreateClicked = () => dispatch(toggleBankCreateModal(true))
  return (
    <PopupModal
      visible={isDisplay}
      title="銀行列表"
      onCancel={onCancel}
      width={800}
    >
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="inline"
        style={{ display: 'inline-block' }}
      >
        <FormField label="銀行帳戶" required>
          <Input />
        </FormField>
      </Form>
      <Button
        onClick={handleCreateClicked}
        type="primary"
        style={{ float: 'right' }}
      >
        新增
      </Button>

      <PopupTable columns={columns} data={data} />
    </PopupModal>
  )
}

export default BankListForm
