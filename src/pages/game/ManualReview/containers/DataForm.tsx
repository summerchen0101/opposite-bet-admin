import { IPBlockType, PlatformType } from '@/lib/enums'
import { Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'
import {
  selectPlayOpts,
  selectSectionOpts,
  useTypedSelector,
} from '../selectors'
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
  const sectionOpts = useTypedSelector(selectSectionOpts)
  const playOpts = useTypedSelector(selectPlayOpts)
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="開賽時間">
            <DatePicker showTime />
          </Form.Item>
        </Col>
        <Col span={12}>
          {/* <Form.Item label="帳務日期">
            <DatePicker />
          </Form.Item> */}
        </Col>
        <Col span={12}>
          <Form.Item label="球種">
            <Select options={[]} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="聯盟">
            <Select options={[]} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="主隊">
            <Select options={[]} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="客隊">
            <Select options={[]} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="賽事備註">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
