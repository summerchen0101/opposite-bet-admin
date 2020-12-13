import { PopupModal } from '@/components'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { usePopupProvider } from '../../context/PopupProvider'

const TeamFormPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('teamForm')
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
  const areaOpts = [{ label: '美國', value: 'USA' }]
  const leagueOpts = [{ label: '乙組聯賽', value: 'xxxx' }]

  return (
    <PopupModal
      visible={visible}
      title="新增/編輯隊伍"
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
        <Form.Item label="地區">
          <Select options={areaOpts} />
        </Form.Item>
        <Form.Item label="聯盟">
          <Select options={leagueOpts} />
        </Form.Item>
        <Form.Item label="名稱">
          <Input />
        </Form.Item>
        <Form.Item label="備註">
          <Input />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default TeamFormPopup