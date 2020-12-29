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
  title: string
  code: string
  content: string
  content_mobile: string
  is_active: boolean
}
interface FormProps {
  form: FormInstance<any>
  values?: FormData
}

const DataForm: React.FC<FormProps> = ({ form, values }) => {
  return (
    <Form form={form} initialValues={values}>
      <FormField
        label="標題"
        name="title"
        rules={[{ required: true, max: 10 }]}
      >
        <Input />
      </FormField>
      <FormField label="代碼" name="code" rules={[{ required: true, max: 10 }]}>
        <Input />
      </FormField>
      <FormField label="狀態" name="is_active" valuePropName="checked">
        <Switch />
      </FormField>
      <Collapse defaultActiveKey={[Device.PC, Device.Mobile]}>
        {deviceOpts.map((t, i) => (
          <Collapse.Panel header={t.label} key={t.value}>
            <FormField
              name={t.value === Device.PC ? 'content' : 'content_mobile'}
              rules={[{ required: true, message: '請輸入內容' }]}
            >
              <Input.TextArea />
            </FormField>
          </Collapse.Panel>
        ))}
      </Collapse>
    </Form>
  )
}

export default DataForm
