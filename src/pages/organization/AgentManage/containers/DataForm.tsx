import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts } from '@/lib/options'
import { Col, DatePicker, Form, Input, Radio, Row, Select, Switch } from 'antd'
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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="廠商">
            <Select
              options={[{ label: 'abc', value: 'abc' }]}
              defaultValue="abc"
              disabled
            />
          </Form.Item>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <Form.Item label="帳號">
            <Select
              options={[
                { label: 'mab123', value: 1 },
                { label: 'mab222', value: 2 },
                { label: 'mab212', value: 3 },
                { label: 'mab992', value: 4 },
                { label: 'mab022', value: 5 },
              ]}
              defaultValue={1}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="暱稱">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="密碼">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="確認密碼">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="備註" name="note">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
