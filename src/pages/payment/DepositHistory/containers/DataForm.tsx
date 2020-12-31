import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, platformTypeOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  Radio,
  Row,
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
        <DescriptionsItem label="會員名稱">gogoro</DescriptionsItem>
        <DescriptionsItem label="充值類型">公司入款</DescriptionsItem>
        <DescriptionsItem label="轉出銀行">中国农业银行</DescriptionsItem>
        <DescriptionsItem label="轉出帳戶姓名">王大明</DescriptionsItem>
        <DescriptionsItem label="充值渠道">銀行卡</DescriptionsItem>
        <DescriptionsItem label="存入銀行">國泰世華銀行</DescriptionsItem>
        <DescriptionsItem label="存入帳戶名稱">陳小美</DescriptionsItem>
        <DescriptionsItem label="存入帳號">9876543210</DescriptionsItem>
        <DescriptionsItem label="存入金額">3,000.00</DescriptionsItem>
        <DescriptionsItem label="備註">
          <Input.TextArea />
        </DescriptionsItem>
      </Descriptions>
    </Form>
  )
}

export default DataForm
