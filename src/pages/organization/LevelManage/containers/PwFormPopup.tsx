import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Button, Form as AntForm, Input } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const PwFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('pwForm')
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
      title="修改密碼"
      onCancel={() => setVisible(false)}
      width={400}
      // footer={[
      //   <Button key="reset" onClick={() => form.resetFields()}>
      //     重置
      //   </Button>,
      //   <Button key="submit" type="primary" onClick={handleSubmit}>
      //     送出
      //   </Button>,
      // ]}
    >
      <Form form={form}>
        <FormField label="密碼" name="pw" required>
          <Input.Password />
        </FormField>
        <FormField label="確認密碼" name="pw_confirm" required>
          <Input.Password />
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default PwFormPopup
