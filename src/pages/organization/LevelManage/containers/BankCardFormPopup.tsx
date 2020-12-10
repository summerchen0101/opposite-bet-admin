import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Button, Form as AntForm, Input, Select } from 'antd'
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
  const bankOpts = [
    { label: '中國信託(822)', value: '822' },
    { label: '國泰世華(013)', value: '013' },
  ]

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
      <Form form={form}>
        <FormField label="戶名" name="name">
          <Input />
        </FormField>
        <FormField label="帳戶" name="account">
          <Input />
        </FormField>
        <FormField label="銀行" name="bank">
          <Select options={bankOpts} placeholder="請選擇" />
        </FormField>
        <FormField label="分行名稱" name="branch">
          <Input />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default BankCardFormPopup
