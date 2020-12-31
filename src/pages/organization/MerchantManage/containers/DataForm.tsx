import { IPBlockType, PlatformType, Currency, Language } from '@/lib/enums'
import { langOpts, platformTypeOpts, currencyOpts } from '@/lib/options'
import { Col, Divider, Form, Input, Radio, Row, Select, Switch } from 'antd'
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
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="帳號(前綴)" help="請輸入3個英文字">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="名稱">
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
          <Form.Item label="語系">
            <Select options={langOpts} defaultValue={Language.CN} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="幣別">
            <Select options={currencyOpts} defaultValue={Currency.CN} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="額度">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="API KEY">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="手機">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="微信">
            <Input />
          </Form.Item>
        </Col>
        <Divider orientation="left">白名單</Divider>
        <Col span={12}>
          <Form.Item label="IP白名單(測試環境)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="IP白名單(正式環境)">
            <Input />
          </Form.Item>
        </Col>
        <Divider orientation="left">聯絡資料</Divider>
        <Col span={12}>
          <Form.Item label="商務(skype)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="財務(skype)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="技術(skype)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="系統orPMor客服(skype)">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="負責人(skype)">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="狀態" name="is_active" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  )
}

export default DataForm
