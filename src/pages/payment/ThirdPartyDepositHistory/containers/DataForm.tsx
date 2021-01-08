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
          <Descriptions title="訂單資訊" column={1} bordered size="small">
            <DescriptionsItem label="訂單編號">
              tkHoAH8RTKSeoQfA
            </DescriptionsItem>
            <DescriptionsItem label="訂單狀態">已完成</DescriptionsItem>
            <DescriptionsItem label="訂單總金額">1000</DescriptionsItem>
            <DescriptionsItem label="申請時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
            <DescriptionsItem label="付款時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
            <DescriptionsItem label="完成時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
            <DescriptionsItem label="過期時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
          </Descriptions>
        </Col>
        <Col span={12}>
          <Descriptions title="繳費單資訊" column={1} bordered size="small">
            <DescriptionsItem label="金流商">Fafago</DescriptionsItem>
            <DescriptionsItem label="繳費單編號">ABB1234</DescriptionsItem>
            <DescriptionsItem label="繳費方式">ATM</DescriptionsItem>
            <DescriptionsItem label="繳費單狀態">已繳費</DescriptionsItem>
            <DescriptionsItem label="繳費單金額">1000.00</DescriptionsItem>
            <DescriptionsItem label="截止時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
            <DescriptionsItem label="付款時間">
              2020-12-31 13:22:30
            </DescriptionsItem>
            <DescriptionsItem label="銀行名稱">-</DescriptionsItem>
            <DescriptionsItem label="銀行代碼">-</DescriptionsItem>
            <DescriptionsItem label="付款帳號">-</DescriptionsItem>
            <DescriptionsItem label="驗證碼">-</DescriptionsItem>
          </Descriptions>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
