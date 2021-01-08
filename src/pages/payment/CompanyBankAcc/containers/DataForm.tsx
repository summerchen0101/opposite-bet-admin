import { IPBlockType, PlatformType } from '@/lib/enums'
import { bankCodeOpts, paywayOpts } from '@/lib/options'
import { Col, Descriptions, Form, Input, Row, Select, Switch } from 'antd'
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
const options = [
  { label: '預設', value: 1 },
  { label: '輪替分類一', value: 2 },
]
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="輪替群組">
            <Select options={options} defaultValue={1} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="帳戶狀態" valuePropName="checked">
            <Switch defaultChecked />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="銀行名稱">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="分行名稱">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="帳戶號碼">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="帳戶號碼">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="累積充值上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <Form.Item label="最低充值金額">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="最高充值金額">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="備註">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
