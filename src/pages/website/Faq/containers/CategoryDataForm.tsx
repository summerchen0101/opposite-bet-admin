import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Switch,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../selectors'

export interface CategoryFormData {
  id?: number
  name: string
  sort: number
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: CategoryFormData
}
const CategoryDataForm: React.FC<FormProps> = ({ form, values }) => {
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
      <Form.Item label="排序" name="sort">
        <InputNumber />
      </Form.Item>
      <Form.Item label="狀態" name="is_active">
        <Radio.Group options={statusOpts} />
      </Form.Item>
    </Form>
  )
}

export default CategoryDataForm
