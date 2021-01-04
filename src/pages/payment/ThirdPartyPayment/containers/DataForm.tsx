import { IPBlockType, PlatformType } from '@/lib/enums'
import { Col, Divider, Form, Input, Row, Select, Switch } from 'antd'
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
          <Form.Item label="第三方平台">
            <Select
              options={[{ label: '57PAY', value: 1 }]}
              placeholder="請選擇"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="支付類型">
            <Select
              options={[{ label: '微信支付', value: 1 }]}
              placeholder="請選擇"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="名稱">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
      <Divider orientation="left">第三方資料</Divider>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="第三方商編號">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="第三方商密鑰">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Divider orientation="left">收款設定</Divider>
      <Row gutter={16}>
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
        <Col span={12}>
          <Form.Item label="單日充值上限 (每日重置)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="累計充值上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="會員負擔手續費(%)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="商戶負擔手續費(%)">
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
