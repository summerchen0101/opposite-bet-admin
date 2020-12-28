import { Button, Form, Input, Radio, Select, Space, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../selectors'

export interface FormData {
  id?: number
  name: string
  code: string
  note: string
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const onReset = () => form.resetFields()

  const statusOpts = [
    { label: '啟用', value: true },
    { label: '停用', value: false },
  ]

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item
        label="名稱"
        name="name"
        rules={[{ required: true }, { max: 30 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="代碼"
        name="code"
        rules={[{ required: true }, { max: 10 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="備註" name="note" rules={[{ max: 30 }]}>
        <Input />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts} />
      </Form.Item>
    </Form>
  )
}

export default DataForm
