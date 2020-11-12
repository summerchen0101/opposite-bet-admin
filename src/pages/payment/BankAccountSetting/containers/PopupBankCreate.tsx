import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Checkbox, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleBankCreateModal } from '../reducer'
import { selectDisplayBankCreateModal, useTypedSelector } from '../selectors'
const { Option } = Select
const BankCreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayBankCreateModal)
  const onCancel = () => {
    dispatch(toggleBankCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleBankCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="新增銀行" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="銀行名稱" name="mainTeam" required>
          <Input />
        </FormField>
        <FormField label="銀行代碼" name="clientTeam" required>
          <Input />
        </FormField>
        <FormField
          label="顯示會員端"
          name="country"
          required
          initialValue={['opt1']}
        >
          <Checkbox.Group>
            <Checkbox value="opt1">入款</Checkbox>
            <Checkbox value="opt2">出款</Checkbox>
          </Checkbox.Group>
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              送出
            </Button>
            <Button onClick={onCancel} htmlType="reset">
              取消
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default BankCreateForm
