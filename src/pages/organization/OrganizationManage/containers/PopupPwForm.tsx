import { CascaderSelector, PopupModal } from '@/components'
import {
  Button,
  DatePicker,
  Input,
  Select,
  Space,
  Form as AntForm,
  Row,
  Col,
  Radio,
} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { togglePwModal } from '../reducer'
import { selectDisplayPwModal, useTypedSelector } from '../selectors'
import Form, { FormField } from '@/components/Form'
const { Option } = Select
const PwForm: React.FC = () => {
  const dispatch = useDispatch()
  const isDisplay = useTypedSelector(selectDisplayPwModal)
  const [form] = AntForm.useForm()
  const onCancel = () => {
    dispatch(togglePwModal(false))
  }
  const onReset = () => {
    form.resetFields()
  }
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(togglePwModal(false))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <PopupModal
      visible={isDisplay}
      title="修改密碼"
      onCancel={onCancel}
      width={600}
    >
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormField label="會員帳號" name="account" required>
          <Input />
        </FormField>
        <FormField label="密碼" name="pw" required>
          <Input.Password />
        </FormField>
        <FormField label="確認密碼" name="pw_confirm" required>
          <Input.Password />
        </FormField>

        <FormField style={{ marginTop: '20px', textAlign: 'center' }}>
          <Space size="large">
            <Button htmlType="reset" onClick={onReset}>
              重置
            </Button>
            <Button type="primary" htmlType="submit">
              送出
            </Button>
          </Space>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default PwForm
