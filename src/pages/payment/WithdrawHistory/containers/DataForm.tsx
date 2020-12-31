import { ColorText } from '@/components'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { Descriptions, Form, Input } from 'antd'
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
      <Descriptions column={1} bordered size="small">
        <DescriptionsItem label="會員名稱">gogoro[陳]</DescriptionsItem>
        <DescriptionsItem label="建立時間">
          2020-12-09 12:00:33
        </DescriptionsItem>
        <DescriptionsItem label="銀行名稱">中国农业银行</DescriptionsItem>
        <DescriptionsItem label="分行名稱">xx分行</DescriptionsItem>
        <DescriptionsItem label="銀行帳號">9876543210</DescriptionsItem>

        <DescriptionsItem label="申請金額">3,000.00</DescriptionsItem>
        <DescriptionsItem label="手續費">5%</DescriptionsItem>
        <DescriptionsItem label="實際出款金額">2,900.00</DescriptionsItem>
        <DescriptionsItem label="備註">
          <Input.TextArea />
        </DescriptionsItem>
      </Descriptions>
    </Form>
  )
}

export default DataForm
