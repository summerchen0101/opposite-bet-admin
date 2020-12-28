import { Form, Input, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'

export interface FormData {
  code: string
  name: string
  note: string
  is_active: boolean
}

const AreaDataForm: React.FC<{ form: FormInstance<any>; values: FormData }> = ({
  form,
  values,
}) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form form={form} layout="vertical" initialValues={values}>
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
  )
}

export default AreaDataForm
