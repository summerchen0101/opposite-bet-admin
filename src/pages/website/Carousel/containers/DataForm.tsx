import { DateRangePicker, ImageUpload } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Device } from '@/lib/enums'
import { deviceOpts } from '@/lib/options'
import { Col, Collapse, DatePicker, Input, Radio, Row, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import { Moment } from 'moment'
import React from 'react'

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
  return (
    <Form form={form}>
      <FormField label="標題">
        <Input />
      </FormField>
      <FormField label="廣告期間">
        <DatePicker.RangePicker />
      </FormField>
      <FormField label="平台顯示" name="platform" initialValue={0}>
        <Radio.Group>
          <Radio value={0}>全部</Radio>
          <Radio value={1}>手機版</Radio>
          <Radio value={2}>桌上型電腦</Radio>
        </Radio.Group>
      </FormField>
      <FormField label="連結">
        <Input placeholder="ex: http://google.com" />
      </FormField>
      <Row gutter={16}>
        <Col span={12}>
          <FormField label="另開視窗" name="is_blank" valuePropName="checked">
            <Switch />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </FormField>
        </Col>
      </Row>
      <Collapse defaultActiveKey={[Device.PC, Device.Mobile]}>
        {deviceOpts.map((t, i) => (
          <Collapse.Panel header={t.label} key={t.value}>
            <FormField>
              <ImageUpload />
            </FormField>
          </Collapse.Panel>
        ))}
      </Collapse>
    </Form>
  )
}

export default DataForm
