import Form, { FormField } from '@/components/Form'
import PopupModal from '@/components/PopupModal'
import { Button, Form as AntForm, Input, Select, Space } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleRejectModal } from '../reducer'
import { selectDisplayRejectModal, useTypedSelector } from '../selectors'
const { Option } = Select
const RejectForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayRejectModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(toggleRejectModal(false))
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(toggleRejectModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <PopupModal visible={isDisplay} title="拒絕" onCancel={onCancel}>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="備註" required>
          <Input.TextArea placeholder="請輸入備註" />
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

export default RejectForm
