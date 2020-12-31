import { ColorText } from '@/components'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { pointControlOpts } from '@/lib/options'
import { Descriptions, Form, Input, InputNumber, Select } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
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
      <Form.Item label="會員帳號">
        <Input />
      </Form.Item>
      <Form.Item label="平台">
        <Select />
      </Form.Item>
      <Form.Item label="類型">
        <Select options={pointControlOpts} defaultValue={1} />
      </Form.Item>
      <Form.Item label="存提項目">
        <Select />
      </Form.Item>
      <Form.Item label="金額">
        <InputNumber style={{ width: '130px' }} />
      </Form.Item>
      <Form.Item label="備註">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default DataForm
