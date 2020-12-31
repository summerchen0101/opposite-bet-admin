import { IPBlockType, PlatformType, Currency, Language } from '@/lib/enums'
import { langOpts, platformTypeOpts, currencyOpts } from '@/lib/options'
import { Col, Form, Input, Radio, Row, Select, Switch } from 'antd'
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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="廠商帳號" help="請輸入3個英文字">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="名稱">
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
          <Form.Item label="語系">
            <Select options={langOpts} defaultValue={Language.CN} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="幣別">
            <Select options={currencyOpts} defaultValue={Currency.CN} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="前綴">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="額度">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="手機">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="微信">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="狀態" name="is_active" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
