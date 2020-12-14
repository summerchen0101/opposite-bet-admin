import { PopupModal } from '@/components'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Space } from 'antd'
import React, { useState } from 'react'
import { usePopupProvider } from '../../context/PopupProvider'
const GameDetailFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('gameDetailForm')
  const [nameArr, setNameArr] = useState<string[]>([''])
  const pushNameArr = () => setNameArr([...nameArr, ''])
  const popNameArr = () =>
    setNameArr(nameArr.filter((t, i) => nameArr.length - 1 !== i))
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
          {nameArr.map((t, i) => (
            <Space key={i} className="mb-1">
              <Input
                addonAfter={<Select options={nameAddonOpts} defaultValue={1} />}
              />
              {i === nameArr.length - 1 && (
                <div style={{ width: '75px' }}>
                  <Button
                    className="mr-1"
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => pushNameArr()}
                  />
                  {i !== 0 && (
                    <Button
                      icon={<MinusOutlined onClick={() => popNameArr()} />}
                    />
                  )}
                </div>
              )}
            </Space>
          ))}
        </Form.Item>
        <Form.Item label="備註">
          <Input />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default GameDetailFormPopup
