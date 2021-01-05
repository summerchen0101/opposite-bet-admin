import { IPBlockType, PlatformType, Currency, Language } from '@/lib/enums'
import { langOpts, platformTypeOpts, currencyOpts } from '@/lib/options'
import { Col, Divider, Form, Input, Radio, Row, Select, Switch } from 'antd'
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
const ContactForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Divider orientation="left">商務</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="姓名">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Telegram">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Divider orientation="left">財務</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="姓名">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Telegram">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Divider orientation="left">技術</Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="姓名">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Telegram">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactForm
