import { PopupModal } from '@/components'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

const GameDetailFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameDetailForm')
  const [form] = Form.useForm()
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

  const gameOpts = [
    { label: '反波膽', value: 'opposite' },
    { label: '總得分', value: 'total' },
  ]

  const nameAddonOpts = [
    { label: '主', value: 1 },
    { label: '客', value: 2 },
    { label: '和', value: 0 },
    { label: '無', value: 3 },
  ]

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯玩法細項"
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
        <Form.Item label="代碼">
          <Input />
        </Form.Item>
        <Form.Item label="玩法">
          <Select options={gameOpts} defaultValue="opposite" />
        </Form.Item>
        <Form.Item label="名稱">
          <Input
            addonAfter={<Select options={nameAddonOpts} defaultValue={1} />}
          />
        </Form.Item>
        <Form.Item label="備註">
          <Input />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default GameDetailFormPopup
