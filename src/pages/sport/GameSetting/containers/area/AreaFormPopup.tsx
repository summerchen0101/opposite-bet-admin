import { PopupModal } from '@/components'
import { Button, Form, Input, Switch } from 'antd'
import React from 'react'
import { CreateCountry } from '../../API/types'
import { usePopupProvider } from '../../context/PopupProvider'
import { useAPIService } from '../../service/country'

const AreaFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('areaForm')
  const { onCreate } = useAPIService()
  const [form] = Form.useForm()
  const handleSubmit = async () => {
    try {
      const values = (await form.validateFields()) as CreateCountry
      console.log('Received values of form: ', values)
      onCreate(values)
      form.resetFields()
      setVisible(false)
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯地區"
      onCancel={() => setVisible(false)}
      width={360}
      footer={[
        <Button key="reset" onClick={() => setVisible(false)}>
          取消
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          送出
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="代碼" name="code">
          <Input />
        </Form.Item>
        <Form.Item label="名稱" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="備註" name="note">
          <Input />
        </Form.Item>
        <Form.Item label="狀態" name="is_active" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default AreaFormPopup
