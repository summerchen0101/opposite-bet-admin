import { PopupModal } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Protocal } from '@/lib/enums'
import { Button, Form as AntForm, Input, Select } from 'antd'
import React from 'react'
import { usePopupProvider } from '../context/PopupProvider'
const InvitedFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('invitedForm')
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
  const protocalOpts = Object.entries(Protocal).map(([label, value]) => ({
    label: value,
    value,
  }))

  return (
    <PopupModal
      visible={visible}
      title="邀请连结"
      onCancel={() => setVisible(false)}
      footer={false}
    >
      <Form form={form}>
        <FormField label="連結網址" name="link">
          <Input.Group compact>
            <Input
              value="http://abc.com/p/qq1234"
              style={{ width: 'calc(100% - 70px)' }}
              readOnly
            />
            <Button>複製</Button>
          </Input.Group>
        </FormField>
        <FormField label="推廣碼" name="code">
          <Input.Group compact>
            <Input
              value="qq1234"
              style={{ width: 'calc(100% - 70px)' }}
              readOnly
            />
            <Button>複製</Button>
          </Input.Group>
        </FormField>
      </Form>
    </PopupModal>
  )
}

export default InvitedFormPopup
