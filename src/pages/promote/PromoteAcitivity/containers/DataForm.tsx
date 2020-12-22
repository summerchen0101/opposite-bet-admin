import { ContentEditor, ImageUpload } from '@/components'
import Form, { FormField } from '@/components/Form'
import { Status } from '@/lib/enums'
import { statusOpts } from '@/lib/options'
import { Col, Collapse, DatePicker, Input, InputNumber, Radio, Row } from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment, { Moment } from 'moment'
import React from 'react'

export interface FormData {
  id?: number
  title: string
  content: string
  date_range_type: string
  limit_range: [Moment, Moment]
  is_active: Status
  content_mobile: string
  img: string
  img_mobile: string
  bonus: number
}

interface FormProps {
  form: FormInstance<any>
  values?: FormData
}

const disabledDate = (current) => {
  return current && current < moment().startOf('day')
}

const DataForm: React.FC<FormProps> = ({ form, values }) => {
  return (
    <Form form={form} initialValues={values}>
      <Row gutter={32} className="mb-2">
        <Col span={12}>
          <FormField label="活動名稱" name="title">
            <Input placeholder="請輸入內容" />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="狀態" name="is_active">
            <Radio.Group options={statusOpts.filter((t) => t.value !== 0)} />
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="活動期間" name="date_range_type">
            <Radio.Group>
              <Radio value="forever">無限期</Radio>
              <Radio value="limit">
                <FormField
                  name="limit_range"
                  className="d-inline-block mb-0"
                  style={{ verticalAlign: 'baseline' }}
                >
                  <DatePicker.RangePicker disabledDate={disabledDate} />
                </FormField>
              </Radio>
            </Radio.Group>
          </FormField>
        </Col>
        <Col span={12}>
          <FormField label="活動獎金" name="bonus">
            <InputNumber style={{ width: '200px' }} placeholder="0" />
          </FormField>
        </Col>
      </Row>

      <Collapse defaultActiveKey={['1', '2']}>
        <Collapse.Panel header="桌上型電腦" key="1">
          <FormField name="img">
            <ImageUpload />
          </FormField>
          <FormField name="content">
            <ContentEditor />
          </FormField>
        </Collapse.Panel>
        <Collapse.Panel header="手機" key="2">
          <FormField name="img_mobile">
            <ImageUpload />
          </FormField>
          <FormField name="content_mobile">
            <ContentEditor />
          </FormField>
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}

export default DataForm
