import PopupModal from '@/components/PopupModal'
import { Button, DatePicker, Input, Select, Space, Form as AntForm } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const CreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayCreateModal)
  const onCancel = () => {
    dispatch(toggleCreateModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleCreateModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="新增常用帳戶" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="銀行名稱" name="mainTeam" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">822 中國信託</Option>
          </Select>
        </FormField>
        <FormField label="銀行帳戶" name="clientTeam" required>
          <Input />
        </FormField>
        <FormField label="開戶行網點" name="country" required>
          <Input />
        </FormField>
        <FormField label="帳戶" name="league" required>
          <Input />
        </FormField>
        <FormField label="類型" name="startAt" required>
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">存入</Option>
            <Option value="opt2">提出</Option>
          </Select>
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

export default CreateForm
