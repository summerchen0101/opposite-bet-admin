import { ColorText } from '@/components'
import { Button, Form, Input, Radio, Select, Space, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../selectors'

export interface FormData {
  id?: number
  name: string
  permission_ids: number[]
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

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      <Form.Item label="活動名稱">
        <ColorText grey large>
          儲值滿3000送300
        </ColorText>
      </Form.Item>
      <Form.Item label="帳號">
        <ColorText grey large>
          gogoro123
        </ColorText>
      </Form.Item>
      <Form.Item label="活動獎金" name="point" initialValue="1000">
        <Input />
      </Form.Item>
      {/* <Form.Item label="申請資訊" name="info">
        <Input.TextArea />
      </Form.Item> */}
      <Form.Item label="備註" name="notes">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
