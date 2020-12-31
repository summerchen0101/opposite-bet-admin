import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts } from '@/lib/options'
import { Col, DatePicker, Form, Input, Radio, Row, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment from 'moment'
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
      <Form.Item label="類型" name="block_type">
        <Radio.Group options={IPBlockTypeOpts} />
      </Form.Item>
      <Form.Item
        label="IP"
        name="ip"
        help="請使用 IP_V4 格式，例如 192.168.1.1 (0~255.0~255.0~255.0~255)"
      >
        <Input />
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
