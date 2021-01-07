import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, paywayOpts, platformTypeOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Switch,
} from 'antd'
import DescriptionsItem from 'antd/lib/descriptions/Item'
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
      <Descriptions column={1} bordered size="small">
        <DescriptionsItem label="廠商">ABC</DescriptionsItem>
        <DescriptionsItem label="上層代理">apple[頻果]</DescriptionsItem>
        <DescriptionsItem label="會員名稱">gogoro[陳]</DescriptionsItem>
        <DescriptionsItem label="核發金額">1000</DescriptionsItem>
        <DescriptionsItem label="匯款時間">
          2020-12-09 12:00:33
        </DescriptionsItem>
        <DescriptionsItem label="支付方式">
          <Form.Item>
            <Select options={paywayOpts} defaultValue={1} />
          </Form.Item>
        </DescriptionsItem>

        <DescriptionsItem label="後五碼">12345</DescriptionsItem>
        <DescriptionsItem label="備註(後台)">
          <Input.TextArea />
        </DescriptionsItem>
        <DescriptionsItem label="備註(會員端)">
          <Input.TextArea />
        </DescriptionsItem>
      </Descriptions>
    </Form>
  )
}

export default DataForm
