import { Device } from '@/lib/enums'
import { deviceOpts } from '@/lib/options'
import { Col, Collapse, Form, Input, Row, Select, Switch } from 'antd'
import { FormInstance } from 'antd/lib/form'
import React, { useEffect } from 'react'

export interface FormData {
  id?: number
  catalogue_id: string
  title: string
  content: string
  content_mobile: string
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

  const categoryOpts = [{ label: '存款問題', value: 1 }]

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
        <Col span={12}>
          <Form.Item label="分類" name="category" initialValue={1}>
            <Select options={categoryOpts} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
      <Collapse defaultActiveKey={[Device.PC, Device.Mobile]}>
        {deviceOpts.map((t, i) => (
          <Collapse.Panel header={t.label} key={t.value}>
            <Form.Item
              name={t.value === Device.PC ? 'content' : 'content_mobile'}
              rules={[{ required: true, message: '請輸入內容' }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Collapse.Panel>
        ))}
      </Collapse>
    </Form>
  )
}

export default DataForm
