import { ColorText } from '@/components'
import { IPBlockType, PlatformType } from '@/lib/enums'
import { IPBlockTypeOpts, paywayOpts, platformTypeOpts } from '@/lib/options'
import {
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  InputNumber,
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
      <Row gutter={16}>
        <Col span={12}>
          <Descriptions column={1} bordered size="small">
            <DescriptionsItem label="申請單號">
              tkHoAH8RTKSeoQfA
            </DescriptionsItem>
            <DescriptionsItem label="廠商">ABC</DescriptionsItem>
            <DescriptionsItem label="上層代理">apple[頻果]</DescriptionsItem>
            <DescriptionsItem label="會員名稱">gogoro[陳]</DescriptionsItem>
            <DescriptionsItem label="出金金額">1000</DescriptionsItem>
            <DescriptionsItem label="銀行存摺驗證狀態">
              <ColorText green>有效</ColorText>
            </DescriptionsItem>
            <DescriptionsItem label="出金手續費">
              <Form.Item>
                <InputNumber min={0} style={{ width: '100%' }} />
              </Form.Item>
            </DescriptionsItem>
            <DescriptionsItem label="備註(後台)">
              <Input.TextArea />
            </DescriptionsItem>
            <DescriptionsItem label="備註(會員端)">
              <Input.TextArea />
            </DescriptionsItem>
          </Descriptions>
        </Col>
        <Col span={12}>
          <Descriptions column={1} bordered size="small">
            <DescriptionsItem label="上次出金申請總額">0</DescriptionsItem>
            <DescriptionsItem label="輸贏結果">90</DescriptionsItem>
            <DescriptionsItem label="未派彩注單">0</DescriptionsItem>
            <DescriptionsItem label="未派彩注單退水總額">0</DescriptionsItem>
            <DescriptionsItem label="紅利禮金">3200</DescriptionsItem>
            <DescriptionsItem label="線下儲值">700</DescriptionsItem>
            <DescriptionsItem label="第三方儲值">100</DescriptionsItem>
            <DescriptionsItem label="第三方儲值手續費">0</DescriptionsItem>
            <DescriptionsItem label="手動補點">0</DescriptionsItem>
            <DescriptionsItem label="手動扣點">0</DescriptionsItem>
            <DescriptionsItem label="補點校正">0</DescriptionsItem>
            <DescriptionsItem label="扣點校正">0</DescriptionsItem>
            <DescriptionsItem label="歷史出金">0</DescriptionsItem>
            <DescriptionsItem label="本次出金">1000</DescriptionsItem>
            <DescriptionsItem label="計算結果">3090</DescriptionsItem>
            <DescriptionsItem label="目前所有錢包總額">3080</DescriptionsItem>
          </Descriptions>
        </Col>
      </Row>
    </Form>
  )
}

export default DataForm
