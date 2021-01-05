import { PopupModal } from '@/components'
import { bankCodeOpts } from '@/lib/options'
import { Button, Form as AntForm, Input, Select, Form } from 'antd'
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

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯銀行卡"
      onCancel={() => setVisible(false)}
      width={400}
      footer={[
        <Button key="cancel" onClick={() => setVisible(false)}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form layout="vertical" form={form}>
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
      </Form>
    </PopupModal>
  )
}

export default BankCardFormPopup
