import { newsTypeOpts } from '@/lib/options'
import { Col, DatePicker, Form, Input, Radio, Row, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import React, { useEffect } from 'react'
import { NewsType } from '../API/types'
export interface FormData {
  id?: number
  title: string
  content: string
  date_range: [Moment, Moment]
  news_type: NewsType
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
      <Form.Item label="標題" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="連結" name="link">
        <Input placeholder="ex: http://google.com" />
      </Form.Item>
      <Form.Item label="期間" name="date_range_type" initialValue="forever">
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
      <Form.Item label="簡中內容(3000字以下)" name="content">
        <Input.TextArea />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="另開視窗"
            name="open_win"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
