import { IPBlockType, PlatformType } from '@/lib/enums'
import { bankCodeOpts, pointControlOpts } from '@/lib/options'
import { Form, Input, InputNumber, Radio, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect, useState } from 'react'
export interface FormData {
  id?: number
  block_type: IPBlockType
  platform_type: PlatformType
  ip: string
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
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item label="銀行名稱">
        <Select options={bankCodeOpts} placeholder="請選擇" />
      </Form.Item>
      <Form.Item label="分行名稱">
        <Input />
      </Form.Item>
      <Form.Item label="帳戶名稱">
        <Input />
      </Form.Item>
      <Form.Item label="銀行帳號">
        <Input />
      </Form.Item>
      <Form.Item label="狀態" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
