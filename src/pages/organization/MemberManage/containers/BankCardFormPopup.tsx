import { ImageUpload, PopupModal } from '@/components'
import { bankCodeOpts } from '@/lib/options'
import {
  Button,
  Form as AntForm,
  Input,
  Select,
  Form,
  Row,
  Col,
  Switch,
} from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const BankCardFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('bankCardForm')
  const [form] = AntForm.useForm()
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      console.log('Received values of form: ', values)
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }

  const handleReset = () => {
    setVisible(false)
    form.resetFields()
  }

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯銀行卡"
      onCancel={handleReset}
      width={750}
      destroyOnClose
    >
      <Form layout="vertical" form={form}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="銀行" name="bank">
              <Select options={bankCodeOpts} placeholder="請選擇" />
            </Form.Item>
            <Form.Item label="分行名稱" name="branch">
              <Input />
            </Form.Item>
            <Form.Item label="戶名" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="銀行帳號" name="account">
              <Input />
            </Form.Item>
            <Form.Item label="備註(後台)" name="note_1">
              <Input.TextArea />
            </Form.Item>
            <Form.Item label="備註(會員端)" name="note_2">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label="是否設為預設存摺"
              name="is_default"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item label="驗證快照留存" name="image">
              <ImageUpload />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </PopupModal>
  )
}

export default BankCardFormPopup
