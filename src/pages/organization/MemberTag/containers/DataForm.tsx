import { IPBlockTypeOpts, platformTypeOpts } from '@/lib/options'
import { Form, Input, Radio, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
export interface FormData {
  id?: number
  name: string
  content: string
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item label="標籤名稱" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="說明" name="content">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
