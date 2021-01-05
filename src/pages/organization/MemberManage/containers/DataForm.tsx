import { IPBlockType, PlatformType } from '@/lib/enums'
import {
  Button,
  Col,
  Collapse,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Switch,
} from 'antd'
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
const DataForm: React.FC<FormProps> = ({ form, values }) => {
  useEffect(() => {
    form.setFieldsValue(values)
  }, [values])
  return (
    <Form layout="vertical" form={form} initialValues={values}>
      <Form.Item>
        <Descriptions bordered size="small" column={2}>
          <Descriptions.Item label="廠商">abc123</Descriptions.Item>
          <Descriptions.Item label="上層代理">gogoro99</Descriptions.Item>
        </Descriptions>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="帳號">
            <Input.Group compact>
              <Input style={{ width: '135px' }} />
              <Button>查詢帳號</Button>
            </Input.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="暱稱">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="密碼">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="確認密碼">
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="標籤">
            <Select mode="multiple" allowClear />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="狀態" name="is_active" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="單注下限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="單注上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="單場上限">
            <Input />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="備註">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>
      <Collapse ghost style={{ margin: '0 -15px' }}>
        <Collapse.Panel header="其他資料" key="1">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="電子郵箱">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="生日">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="微信">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="QQ">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}

export default DataForm
