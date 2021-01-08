import { IPBlockType, PlatformType } from '@/lib/enums'
import { paywayOpts } from '@/lib/options'
import { Col, Descriptions, Form, Input, Row, Select } from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
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
          <Descriptions column={1} bordered size="small">
            <DescriptionsItem label="廠商">ABC</DescriptionsItem>
            <DescriptionsItem label="上層(代理)">
              cntd36 (小城)
            </DescriptionsItem>
            <DescriptionsItem label="會員帳號">
              barry0325 (老王)
            </DescriptionsItem>
            <DescriptionsItem label="帳戶名稱">-</DescriptionsItem>
            <DescriptionsItem label="分行名稱">-</DescriptionsItem>
            <DescriptionsItem label="帳戶號碼">-</DescriptionsItem>
            <DescriptionsItem label="銀行存摺狀態">待審核</DescriptionsItem>
            <DescriptionsItem label="備註(後台)">
              <Input.TextArea />
            </DescriptionsItem>
            <DescriptionsItem label="備註(會員端)">
              <Input.TextArea />
            </DescriptionsItem>
          </Descriptions>
        </Col>
        <Col span={12}>
          <a href="https://fakeimg.pl/400x200/" target="_blank">
            <img
              style={{ maxWidth: '100%' }}
              src="https://fakeimg.pl/400x200/"
            />
          </a>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
