import { PopupModal } from '@/components'
import { PointOperateType } from '@/lib/enums'
import {
  bankCodeOpts,
  depositOpts,
  pointOperateOpts,
  withdrawOpts,
} from '@/lib/options'
import { Button, Form as AntForm, Input, Select, Form, InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'
import { usePopupProvider } from '../context/PopupProvider'

const ManualPointPopup: React.FC = () => {
  const [visible, setVisible] = usePopupProvider('manualPoint')
  const [operatorType, setOperatorType] = useState(1)
  const [form] = AntForm.useForm()
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      console.log('Received values of form: ', values)
      handleReset()
    } catch (info) {
      console.log('Validate Failed:', info)
    }
  }
  const operatorTypeOpts = {
    [PointOperateType.Add]: depositOpts,
    [PointOperateType.Subtract]: withdrawOpts,
  }

  const handleReset = () => {
    setVisible(false)
    form.resetFields()
    setOperatorType(1)
  }

  return (
    <PopupModal
      visible={visible}
      title="人工加減碼"
      onCancel={handleReset}
      width={400}
      destroyOnClose
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="廠商">
          <Select options={[{ label: 'ABC', value: 1 }]} placeholder="請選擇" />
        </Form.Item>
        <Form.Item label="會員帳號">
          <Input />
        </Form.Item>
        <Form.Item label="調節類別">
          <Input.Group compact>
            <Form.Item>
              <Select
                options={pointOperateOpts}
                defaultValue={operatorType}
                onChange={(v) => setOperatorType(v)}
                style={{ width: '120px' }}
              />
            </Form.Item>
            <Form.Item>
              <Select
                options={operatorTypeOpts[operatorType]}
                style={{ width: '200px' }}
                defaultValue={1}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="金額">
          <InputNumber className="w-100" min={1} />
        </Form.Item>
        <Form.Item label="備註">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </PopupModal>
  )
}

export default ManualPointPopup
