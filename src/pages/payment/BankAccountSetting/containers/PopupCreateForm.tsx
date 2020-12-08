import PopupModal from '@/components/PopupModal'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Checkbox,
} from 'antd'
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
        <FormField label="銀行名稱" name="bankName">
          <Select placeholder="請選擇" allowClear>
            <Option value="opt1">822 中國信託</Option>
          </Select>
        </FormField>
        <FormField label="分行" name="branch">
          <Input />
        </FormField>
        <FormField label="戶名" name="accountName">
          <Input />
        </FormField>
        <FormField label="帳號" name="accountNumber">
          <Input />
        </FormField>
        <FormField label="用途" name="usage" initialValue={['opt1']}>
          <Checkbox.Group>
            <Checkbox value="opt1">入款</Checkbox>
            <Checkbox value="opt2">出款</Checkbox>
          </Checkbox.Group>
        </FormField>
        <FormField label="備註" name="notes">
          <Input.TextArea />
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
