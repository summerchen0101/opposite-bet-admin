import { PlatformType } from '@/lib/enums'
import { countryOpts, platformTypeOpts } from '@/lib/options'
import { Form, Input, Radio, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
export interface FormData {
  id?: number
  platform_type: PlatformType
  note: string
  is_active: boolean
  code: string
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
      <Form.Item label="國別" name="code">
        <Select options={countryOpts} showSearch optionFilterProp="label" />
      </Form.Item>
      <Form.Item label="端口設置" name="platform_type">
        <Radio.Group options={platformTypeOpts} />
      </Form.Item>
      <Form.Item label="備註" name="note">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="狀態" name="is_active" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
