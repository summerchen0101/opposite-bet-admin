import { Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd'
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

  const options = [
    { label: '跑馬燈', value: NewsType.Marquee },
    { label: '系統通知', value: NewsType.System },
    { label: '賽事公告', value: NewsType.Game },
    { label: '活動優惠', value: NewsType.Activity },
  ]

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
      <Row gutter={16}>
        <Col span={14}>
          <Form.Item label="期間" name="date_range">
            <DatePicker.RangePicker disabledDate={disabledDate} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="公告種類" name="news_type">
            <Select options={options} value={1} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="簡中內容(3000字以下)" name="content">
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="狀態" name="is_active" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
