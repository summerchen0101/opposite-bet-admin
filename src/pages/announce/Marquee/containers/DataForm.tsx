import { Col, DatePicker, Form, Input, Radio, Row, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import React, { useEffect } from 'react'
export interface FormData {
  id?: number
  content: string
  date_range_type: string
  limit_range: [Moment, Moment]
  is_active: boolean
  is_blank: boolean
  url: string
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  const onReset = () => form.resetFields()

  const disabledDate = (current) => {
    return current && current < moment().startOf('day')
  }

  return (
    <Form
      layout="vertical"
      form={form}
      onReset={onReset}
      initialValues={values}
    >
      {/* <Form.Item label="內容" name="content">
        <Input />
      </Form.Item> */}
      <Form.Item label="連結" name="url">
        <Input placeholder="ex: http://google.com" />
      </Form.Item>
      <Form.Item label="期間" name="date_range_type">
        <Radio.Group>
          <Radio value="forever">無限期</Radio>
          <Radio value="limit">
            <Form.Item
              name="limit_range"
              className="d-inline-block mb-0"
              style={{ verticalAlign: 'baseline' }}
            >
              <DatePicker.RangePicker disabledDate={disabledDate} />
            </Form.Item>
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="內容(50字以下)" name="content">
        <Input.TextArea />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="另開視窗" name="is_blank" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
