import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Col, Input, Radio, Row, Select, Space, Switch } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleCreateModal } from '../reducer'
import { selectDisplayCreateModal, useTypedSelector } from '../selectors'
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
    <PopupModal visible={isDisplay} title="新增黑名單" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField
          label="IP"
          required
          extra="請使用 IP_V4 格式，例如 192.168.1.1 (0~255.0~255.0~255.0~255)"
        >
          <Input />
        </FormField>
        <FormField label="備註">
          <Input.TextArea />
        </FormField>
        <FormField label="狀態" name="is_active" valuePropName="checked">
          <Switch />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default CreateForm
