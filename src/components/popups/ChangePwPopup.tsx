import { usePopup } from '@/contexts/PopupContextProvider'
import { Button, Form, Input, Modal, Space } from 'antd'
import React from 'react'

const ChangePwPopup: React.FC = () => {
  const { visible, setVisible } = usePopup('changePw')
  return (
    <Modal
      title="修改密碼"
      visible={visible}
      onOk={() => {}}
      onCancel={() => setVisible(false)}
      width="350px"
    >
      <Form layout="vertical">
        <Form.Item label="對象" name="target" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="暱稱" name="nick" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密碼" name="pw" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="確認密碼"
          name="pwConfirm"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ChangePwPopup
