import { IPBlockType, PlatformType, YesNo } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts, yesNoOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
  Switch,
} from 'antd'
import { FormInstance } from 'antd/lib/form'
import moment from 'moment'
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
      <Form.Item label="比分" style={{ marginBottom: 0 }}>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <Input placeholder="主隊" />
        </Form.Item>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            lineHeight: '32px',
            textAlign: 'center',
          }}
        >
          -
        </span>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <Input placeholder="客隊" />
        </Form.Item>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="獲利%">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="可交易量">
            <Input addonAfter="萬" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="自動降賠">
            <Radio.Group options={yesNoOpts} defaultValue={YesNo.YES} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Space>
              <Form.Item
                rules={[{ required: true, message: '請輸入降賠注額' }]}
                className="mb-0"
              >
                <Input
                  placeholder="100000"
                  addonAfter="元"
                  style={{ width: '150px' }}
                />
              </Form.Item>
              <span>以上降</span>
              <Form.Item
                rules={[{ required: true, message: '請輸入降賠比例' }]}
                className="mb-0"
              >
                <Input
                  placeholder="0.1"
                  addonAfter="%"
                  style={{ width: '120px' }}
                />
              </Form.Item>
            </Space>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="單注上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="單注下限">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
